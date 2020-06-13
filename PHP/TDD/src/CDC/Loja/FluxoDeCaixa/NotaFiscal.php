<?php

namespace CDC\Loja\FluxoDeCaixa;

class NotaFiscal
{
    private $cliente;
    
    private $valor;
    
    private $data;
    
    public function __construct($cliente, $valor, $data)
    {
        $this->cliente = $cliente;
        $this->valor = $valor;
        $this->data = $data;
    }

    public function getCliente()
    {
        return $this->cliente;
    }

    public function getValor()
    {
        return $this->valor;
    }

    public function getData()
    {
        return $this->data;
    }

    public function setCliente($cliente)
    {
        $this->cliente = $cliente;
    }

    public function setValor($valor)
    {
        $this->valor = $valor;
    }

    public function setData($data)
    {
        $this->data = $data;
    }
}
