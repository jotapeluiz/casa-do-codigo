<?php

namespace CDC\Loja\Carrinho;

use CDC\Loja\Produto\Produto;
use CDC\Loja\Carrinho\CarrinhoDeCompras;
use PHPUnit\Framework\TestCase;

class MaiorPrecoTest extends TestCase
{
    private $carrinho;
    
    protected function setUp()
    {
        $this->carrinho = new CarrinhoDeCompras();
        
        parent::setUp();
    }
    
    public function testDeveRetornarZeroSeCarrinhoVazio()
    {
        $this->assertEquals(0, $this->carrinho->maiorValor());
    }
    
    public function testDeveRetornarValorDoItemSeCarrinhoCom1Elemento()
    {
        $this->carrinho->adiciona(new Produto('Geladeira', 900.00));
                
        $this->assertEquals(900.00, $this->carrinho->maiorValor());
    }
    
    public function testDeveRetornarMaiorValorSeCarrinhoComMuitosElementos()
    {
        $this->carrinho->adiciona(new Produto('Geladeira', 900.00));
        $this->carrinho->adiciona(new Produto('Fogão', 1500.00));
        $this->carrinho->adiciona(new Produto('Máquina de Lavar', 750.00));
                                
        $this->assertEquals(1500.00, $this->carrinho->maiorValor());
    }
}
