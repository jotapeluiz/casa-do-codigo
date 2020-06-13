<?php

namespace CDC\Loja\FluxoDeCaixa;

use CDC\Loja\FluxoDeCaixa\GeradorDeNotaFiscal;
use CDC\Exemplos\RelogioDoSistema;
use PHPUnit\Framework\TestCase;
use Mockery;

class GeradorDeNotaFiscalTest extends TestCase
{
    public function testDeveInvocarAcoesPosteriores()
    {
        $acao1 = Mockery::mock('CDC\Loja\FluxoDeCaixa\AcaoAposGerarNotaInterface');
        $acao1->shouldReceive('executa')->andReturn(true);
        
        $acao2 = Mockery::mock('CDC\Loja\FluxoDeCaixa\AcaoAposGerarNotaInterface');
        $acao2->shouldReceive('executa')->andReturn(true);
        
        $tabela = Mockery::mock('CDC\Loja\Tributos\TabelaInterface');

        $gerador = new GeradorDeNotaFiscal([$acao1, $acao2], new RelogioDoSistema(), $tabela);
        $pedido = new Pedido('JP', 1000, 1);
        
        $notaFiscal = $gerador->gera($pedido);
        
        $this->assertTrue($acao1->executa($notaFiscal));
        $this->assertTrue($acao2->executa($notaFiscal));
        $this->assertNotNull($notaFiscal);
        $this->assertInstanceOf('CDC\Loja\FluxoDeCaixa\NotaFiscal', $notaFiscal);
    }
    
    public function testDeveConsultarATabelaParaCalcularValor()
    {
        // mockando uma tabela, que ainda nem existe
        $tabela = Mockery::mock('CDC\Loja\Tributos\TabelaInterface');
        // definindo o futuro comportamento 'para valor'
        // que deve retornar 0.2 caso valor seja 1000.0
        $tabela->shouldReceive('paraValor')->with(1000.0)->andReturn(0.2);
        
        $gerador = new GeradorDeNotaFiscal([], new RelogioDoSistema(), $tabela);
        $pedido = new Pedido('JP', 1000.0, 1);
        
        $notaFiscal = $gerador->gera($pedido);
        // garantindo que a tabela foi consultada
        $this->assertEquals(1000 * 0.8, $notaFiscal->getValor());
    }
}
