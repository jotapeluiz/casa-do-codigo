<?php

namespace CDC\Loja\RH;

class QuinzeOuVinteECincoPorCento extends RegraDeCalculo
{
    protected function limite()
    {
        return 2500;
    }

    protected function porcentagemAcimaDoLimite()
    {
        return 0.75;
    }

    protected function porcentagemBase()
    {
        return 0.85;
    }
}
