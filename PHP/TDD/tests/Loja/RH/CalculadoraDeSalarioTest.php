<?php

namespace CDC\Loja\RH;

use PHPUnit\Framework\TestCase;
use CDC\Loja\RH\Funcionario;
use CDC\Loja\RH\TabelaCargos;
use CDC\Loja\RH\CalculadoraDeSalario;

class CalculadoraDeSalarioTest extends TestCase
{
    public function testCalculoSalarioDesenvolvedoresComSalarioAbaixoDoLimite()
    {
        $calculadora = new CalculadoraDeSalario();
        $desenvolvedor = new Funcionario('Andre', 1500.0, TabelaCargos::DESENVOLVEDOR);
        $salario = $calculadora->calculaSalario($desenvolvedor);
        
        $this->assertEquals(1500.0 * 0.9, $salario);
    }
    
    public function testCalculoSalarioDesenvolvedoresComSalarioAcimaDoLimite()
    {
        $calculadora = new CalculadoraDeSalario();
        $desenvolvedor = new Funcionario('Andre', 4000.0, TabelaCargos::DESENVOLVEDOR);
        $salario = $calculadora->calculaSalario($desenvolvedor);
        
        $this->assertEquals(4000.0 * 0.8, $salario);
    }
    
    public function testDeveCalcularSalarioParaDBAsComSalarioAbaixoDoLimite()
    {
        $calculadora = new CalculadoraDeSalario();
        $dba = new Funcionario('Mauricio', 1500.00, TabelaCargos::DBA);
        $salario = $calculadora->calculaSalario($dba);
        
        $this->assertEquals(1500.00 * 0.85, $salario);
    }
    
    public function testDeveCalcularSalarioParaDBAsComSalarioAcimaDoLimite()
    {
        $calculadora = new CalculadoraDeSalario();
        $dba = new Funcionario('Mauricio', 4500.00, TabelaCargos::DBA);
        $salario = $calculadora->calculaSalario($dba);
        
        $this->assertEquals(4500.00 * 0.75, $salario);
    }
}
