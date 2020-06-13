<?php

namespace CDC\Loja\Tributos;

use Mockery;
use PHPUnit\Framework\TestCase;
use CDC\Loja\FluxoDeCaixa\Pedido;
use CDC\Loja\Tributos\CalculadoraDeImposto;

class CalculadoraDeImpostoTest extends TestCase
{
    public function testCalculoImpostoParaPedidosSuperiorA2000Reais()
    {
        $tabela = Mockery::mock('CDC\Loja\Tributos\Tabela');
        // ensinando o mock a devolver 0.1 caso o método
        // paraValor seja invocado com o valor 2500.0
        $tabela->shouldReceive('paraValor')->with(2500.0)->andReturn(0.1);
        
        $pedido = new Pedido('JP', 2500.0, 3);
        $calculadora = new CalculadoraDeImposto($tabela);
        $valor = $calculadora->calculaImposto($pedido);
        
        $this->assertEquals((2500.0 * 0.1), $valor);
    }
}
