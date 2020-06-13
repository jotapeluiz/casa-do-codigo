<?php

namespace CDC\Loja\RH;

use Exception;
use CDC\Loja\RH\TabelaCargos;

class Cargo
{
    private $regra;
    
    private $cargos = [
        TabelaCargos::DBA => 'CDC\Loja\RH\QuinzeOuVinteECincoPorCento',
        TabelaCargos::TESTADOR => 'CDC\Loja\RH\QuinzeOuVinteECincoPorCento',
        TabelaCargos::DESENVOLVEDOR => 'CDC\Loja\RH\DezOuVintePorCento'
    ];
            
    public function __construct($regra)
    {
        if (!array_key_exists($regra, $this->cargos)) {
            throw new Exception('Cargo inválido');
        }

        $this->regra = $this->cargos[$regra];
    }

    public function getRegra()
    {
        return new $this->regra();
    }
}
