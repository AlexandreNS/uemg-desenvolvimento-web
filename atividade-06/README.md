# Atividade 06

> A documentação da API criada nessa atividade pode ser conferida aqui [Northwind-API v2](https://documenter.getpostman.com/view/12463861/UVR7MopM).

A conexão do banco é realizada pelo `services/database.js` utilizando uma parametrizações vindas de um arquivo `.env`. É possível criar baseado no `.env.example`.

A partir de informações das tabelas Categories, Region e Employees localizadas na pasta de `schemas` é registrado pela função `routerModelBuilder(schema, limitDefault = 20)`, incluída no arquivo `helpers/route.js`, operações de CRUD de acordo com as validações e informações passados para cada schema

## Execução

Após a instalação das dependencias com `npm i` é possível rodar o projeto utilizando o nodemon com o seguinte comando:

```bash
nodemon --exec npm start
```
