# Atividade 03

> Os exercícios foram organizados no arquivo `ANSWERS.md` da seguinte forma: `{nome-seção}/{nome-exercício}`

Atividades de JS do site [w3schools]('https://www.w3schools.com/js/exercise_js.asp') relacionadas aos seguintes tópicos:

1. JS VARIABLES
2. JS OPERATORS
3. JS DATA TYPES
4. JS FUNCTIONS
5. JS OBJECTS
6. JS EVENTS
7. JS STRINGS

## Como gerar o arquivo `ANSWERS.md`?

Utilizando tecnicas de web-scraping foi implementado um script que pega as repostas e as salva em uma estrutura de pastas com o nome de cada seção. Execute os scripts como especificado abaixo:

```bash
node getLinks # salva os links das atividades em urls.json
node getAnswers # armazena todas as repostas em answersData.json
node saveAnswersData # salva as respostas em uma estrutura de pastas
node saveMdFile # gerar o arquivo ANSWERS.md
```