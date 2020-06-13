<?php

namespace CDC\Loja\FluxoDeCaixa;

use PHPUnit\Framework\TestCase;
use ArrayObject;

class ProcessadorDeBoletosTest extends TestCase
{
    public function testDeveProcessarPagamentoViaBoletoUnico()
    {
        $fatura = new Fatura('Cliente', 150.0);
        $boleto = new Boleto(150.0);
        
        $boletos = new ArrayObject();
        $boletos->append($boleto);
        
        $processador = new ProcessadorDeBoletos();
        $processador->processa($boletos, $fatura);
        
        $this->assertEquals(1, count($fatura->getPagamentos()));
        $this->assertEquals(150.0, $fatura->getPagamentos()[0]->getValor());
    }
    
    public function testDeveProcessarPagamentoViaMuitosBoletos()
    {
        $fatura = new Fatura('Cliente', 150.0);
        
        $boleto1 = new Boleto(100.0);
        $boleto2 = new Boleto(200.0);
        
        $boletos = new ArrayObject();
        $boletos->append($boleto1);
        $boletos->append($boleto2);
        
        $processador = new ProcessadorDeBoletos();
        $processador->processa($boletos, $fatura);
        
        $this->assertEquals(2, count($fatura->getPagamentos()));
        
        $valor1 = $fatura->getPagamentos()[0]->getValor();
        $this->assertEquals(100.0, $valor1);
        
        $valor2 = $fatura->getPagamentos()[1]->getValor();
        $this->assertEquals(200.0, $valor2);
    }
    
    public function testDeveMarcarFaturaComoPagoCasoBoletoUnicoPagueTudo()
    {
        $fatura = new Fatura('Cliente', 150.0);
        
        $boletos = new ArrayObject();
        $boletos->append(new Boleto(150.0));
        
        $processador = new ProcessadorDeBoletos();
        $processador->processa($boletos, $fatura);
        
        $this->assertTrue($fatura->isPago());
    }
}
