<?php

namespace CDC\Loja\Testes;

use CDC\Loja\Carrinho\CarrinhoDeCompras;
use CDC\Loja\Produto\Produto;

class CarrinhoDeComprasBuilder
{
    private $carrinho;
    
    public function __construct()
    {
        $this->carrinho = new CarrinhoDeCompras();
    }

    public function comItens()
    {
        $valores = func_get_args();
        
        foreach ($valores as $valor) {
            $this->carrinho->adiciona(new Produto('Item', $valor, 1));
        }
        
        return $this;
    }
    
    public function getCarrinho()
    {
        return $this->carrinho;
    }
}
