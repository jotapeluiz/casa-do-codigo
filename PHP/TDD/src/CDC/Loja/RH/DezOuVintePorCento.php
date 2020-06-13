<?php

namespace CDC\Loja\RH;

class DezOuVintePorCento extends RegraDeCalculo
{
    protected function limite()
    {
        return 3000;
    }

    protected function porcentagemAcimaDoLimite()
    {
        return 0.8;
    }

    protected function porcentagemBase()
    {
        return 0.9;
    }
}
