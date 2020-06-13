<?php

namespace CDC\Loja\FluxoDeCaixa;

use CDC\Loja\FluxoDeCaixa\Pedido;
use CDC\Loja\FluxoDeCaixa\NotaFiscal;
use CDC\Exemplos\RelogioInterface;
use CDC\Loja\Tributos\TabelaInterface;

class GeradorDeNotaFiscal
{
    private $acoes;
    
    private $relogio;
    
    private $tabela;
    
    public function __construct(array $acoes, RelogioInterface $relogio, TabelaInterface $tabela)
    {
        $this->acoes = $acoes;
        $this->tabela = $tabela;
        $this->relogio = $relogio;
    }
    
    public function gera(Pedido $pedido)
    {
        $valorPedido = $pedido->getValorTotal();
        $valorTabela = $this->tabela->paraValor($valorPedido);
        $valorTotal  = $valorPedido - ($valorPedido * $valorTabela);
        
        $notaFiscal = new NotaFiscal($pedido->getCliente(), $valorTotal, $this->relogio->hoje());
    
        foreach ($this->acoes as $acao) {
            $acao->executa($notaFiscal);
        }
                        
        return $notaFiscal;
    }
}
