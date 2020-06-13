<?php

namespace CDC\Loja\Persistencia;

use PDO;
use PHPUnit\Framework\TestCase;
use CDC\Loja\Persistencia\ProdutoDao;
use CDC\Loja\Produto\Produto;

class ProdutoDaoTest extends TestCase
{
    private $conexao;
    
    private $database;
    
    protected function setUp()
    {
        parent::setUp();
        
        $this->database = sys_get_temp_dir().DIRECTORY_SEPARATOR.'test.db';

        $this->conexao = new PDO("sqlite:{$this->database}");
        $this->conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $this->criarTabela();
    }

    protected function tearDown()
    {
        parent::tearDown();
        
        $this->conexao = null;
        
        unlink($this->database);
    }
    
    protected function criarTabela()
    {
        $sqlString = 'CREATE TABLE IF NOT EXISTS produto ';
        $sqlString.= '(id INTEGER PRIMARY KEY, descricao TEXT, ';
        $sqlString.= 'valor_unitario TEXT, status TINYINT(1) );';
        
        $this->conexao->query($sqlString);
    }
                            
    public function testDeveAdicionarUmProduto()
    {
        $produtoDao = new ProdutoDao($this->conexao);
        $produto = new Produto('Geladeira', 150.1, 1);        
        // Sobrescrevendo a conexão para continuar trabalhando
        // sobre a mesma já instanciada
        $this->conexao = $produtoDao->adiciona($produto);
        // buscando pelo id para
        // ver se está igual o produto do cenário
        $salvo = $produtoDao->porId($this->conexao->lastInsertId());
        
        $this->assertEquals($salvo['descricao'], $produto->getNome());
        $this->assertEquals($salvo['valor_unitario'], $produto->getValorUnitario());
        $this->assertEquals($salvo['status'], $produto->getStatus());
    }
    
    public function testDeveFiltrarAtivos()
    {
        $ativo = new Produto('Geladeira', 150.0, 1);
        $inativo = new Produto('Geladeira', 180.0, 1);
        $inativo->inativa();
        
        $produtoDao = new ProdutoDao($this->conexao);
        $produtoDao->adiciona($ativo);
        $produtoDao->adiciona($inativo);
        
        $produtosAtivos = $produtoDao->ativos();
        
        $this->assertEquals(1, count($produtosAtivos));
        $this->assertEquals(150.0, $produtosAtivos[0]['valor_unitario']);
    }
}
