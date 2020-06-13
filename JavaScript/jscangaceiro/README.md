# README
Repositório de estudos do livro [Cangaceiro Javascript](https://www.casadocodigo.com.br/products/livro-cangaceiro-javascript) da Casa do Código

# Setup

Clone o projeto:
```
git clone git@github.com:jotapeluiz/jscangaceiro.git
```

# Local

Requer Node.js versão 10.16 ou maior instalado.

**Para executar o servidor:**

```
# acesse a pasta server:
cd jscangaceiro/server

# instale as dependências:
npm install

# suba o servidor com o comando:
npm start
```

**Para executar o client:**

```
# acesse a pasta client:
cd jscangaceiro/client

# instale as dependências:
npm install

# build em dev:
npm run build-dev

# build em prod:
npm run build-prod

# suba o servidor com o comando:
npm start
```

# Docker

**Para executar o servidor:**

```
# acesse a pasta server:
cd jscangaceiro/server

# suba o servidor:
docker-compose up server
```
**Para executar o client:**

```
# acesse a pasta client:
cd jscangaceiro/client

# suba o cliente:
docker-compose up client
```

# Execução

Acesse pelo navegador através do endereço [http://localhost:8080](http://localhost:8080)