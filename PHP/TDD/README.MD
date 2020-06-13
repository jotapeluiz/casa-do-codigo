# Teste e Design no Mundo Real com PHP

Repositório de estudos do livro [Teste e Design no Mundo Real com PHP](https://www.casadocodigo.com.br/products/livro-tdd-php).

## Requerimentos

* [Docker](https://www.docker.com/)

## Execução

Builde a imagem:

```shell
docker-compose build tdd
```

Instale as dependências:

```shell
docker-compose run --rm tdd composer install
```

Acesse o shell do container:
```shell
docker-compose run --rm sh
```

Execute os testes:
```shell
./vendor/bin/phpunit tests --testdox --colors
```