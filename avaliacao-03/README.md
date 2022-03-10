# Avaliação 03

> A documentação da API criada nessa atividade pode ser conferida aqui [Avaliação 03-API](https://documenter.getpostman.com/view/12463861/UVsFz97m).

A conexão do banco é realizada pelo `services/database.js` utilizando parametrizações vindas de um arquivo `.env`. É possível criar baseado no `.env.example`.

A partir de informações das tabelas de `alunos` e `turmas` localizadas na pasta de `schemas` é registrado pela função `routerModelBuilder(schema, limitDefault = 20, middlewares = {})`, incluída no arquivo `helpers/route.js`, operações de CRUD de acordo com as validações e informações passados no schema. As validações dos schemas foram realizadas utilizando o pacote [Joi](https://www.npmjs.com/package/joi).

Para impedir a criação ou atualização de alunos em turmas não existentes foi criado o `existTurmaID` para as rotas de insert e update do builder das rotas alunos.

Por fim foi configurado a rota `alunos/:id/turma` que recupera os dados de um aluno específico mais os dados de sua turma

## Execução

Após a instalação das dependências com `npm i` é possível rodar o projeto utilizando o nodemon com o seguinte comando:

```bash
nodemon --exec npm start
```
