<?php

namespace CDC\Loja\FluxoDeCaixa;

use CDC\Loja\FluxoDeCaixa\Pagamento;
use ArrayObject;

class Fatura
{
    private $cliente;
    private $valor;
    private $pagamentos;
    private $pago;
    
    public function __construct($cliente, $valor)
    {
        $this->cliente = $cliente;
        $this->valor = $valor;
        $this->pagamentos = new ArrayObject();
        
        $this->setPago(false);
    }

    public function setPago($pago)
    {
        $this->pago = $pago;
    }
        
    public function getValor()
    {
        return $this->valor;
    }

    public function getPagamentos()
    {
        return $this->pagamentos;
    }
    
    public function isPago()
    {
        return $this->pago;
    }
    
    public function adicionaPagamento(Pagamento $novoPagamento)
    {
        $this->pagamentos->append($novoPagamento);
        
        $valorTotal = 0;
        
        foreach ($this->pagamentos as $pagamento) {
            $valorTotal += $pagamento->getValor();
        }
        
        if ($valorTotal >= $this->valor) {
            $this->setPago(true);
        }
    }
}
