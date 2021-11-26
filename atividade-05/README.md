# Atividade 05

> A documentação da API criada nessa atividade pode ser conferida aqui [Northwind-API v1](https://documenter.getpostman.com/view/12463861/UVJbGcSB).

A conexão do banco é realizada pelo `services/database.js` utilizando uma parametrizações vindas de um arquivo `.env`. É possível criar baseado no `.env.example`.

A partir de informações da tabela Employees localizadas em `schemas/employees.js` o `routes/employees.js` realiza as operações de consulta (limit, ordering e select de campos) e validação das requisições.

## Execução

Após a instalação das dependencias com `npm i` é possível rodar o projeto utilizando o nodemon com o seguinte comando:

```bash
nodemon --exec npm start
```