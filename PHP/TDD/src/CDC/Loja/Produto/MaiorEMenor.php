<?php

namespace CDC\Loja\Produto;

use CDC\Loja\Carrinho\CarrinhoDeCompras;

class MaiorEMenor
{
    private $maior;

    private $menor;
    
    public function encontra(CarrinhoDeCompras $carrinho)
    {
        $produtos = $carrinho->getProdutos();
        
        foreach ($produtos as $produto) {
            if (empty($this->menor)
            || $produto->getValorUnitario() < $this->menor->getValorUnitario()) {
                $this->menor = $produto;
            }
            
            if (empty($this->maior)
            || $produto->getValorUnitario() > $this->maior->getValorUnitario()) {
                $this->maior = $produto;
            }
        }
    }
    
    public function getMaior()
    {
        return $this->maior;
    }

    public function getMenor()
    {
        return $this->menor;
    }
}
