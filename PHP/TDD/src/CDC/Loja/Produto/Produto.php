<?php

namespace CDC\Loja\Produto;

class Produto
{
    private $nome;

    private $valorUnitario;

    private $quantidade;
    
    private $status;
    
    public function __construct($nome, $valorUnitario, $quantidade = 1)
    {
        $this->nome = $nome;
        $this->valorUnitario = $valorUnitario;
        $this->quantidade = $quantidade;
        $this->status = true;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function getValorUnitario()
    {
        return $this->valorUnitario;
    }

    public function getQuantidade()
    {
        return $this->quantidade;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    public function setValorUnitario($valorUnitario)
    {
        $this->valorUnitario = $valorUnitario;
    }

    public function setQuantidade($quantidade)
    {
        $this->quantidade = $quantidade;
    }
    
    public function getValorTotal()
    {
        return ($this->valorUnitario * $this->quantidade);
    }
    
    public function getStatus()
    {
        return $this->status;
    }
        
    public function inativa()
    {
        $this->status = false;
    }
}
