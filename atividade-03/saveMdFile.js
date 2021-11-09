const fs = require('fs')

let answersArr = fs.readFileSync('answersData.json')
answersArr = JSON.parse(answersArr)

let txtAnswer = `# Atividade JavaScript Básico - Respostas 

**OBS.:** Respostas organizadas pelo nome da seção e nome da atividade do site [w3schools]('https://www.w3schools.com/js/exercise_js.asp')

`

let currentTopic = ''
let numberTopic = 0
txtAnswer += answersArr.map((answer) => {
  const content = fs.readFileSync(answer.filename)
  const printTitle = currentTopic !== answer.info.topic
  currentTopic = answer.info.topic

  if (printTitle) numberTopic++;

  return `${printTitle ? '## ' + (numberTopic) + ' - ' + currentTopic : ''}
### ${answer.info.exercise}

\`\`\`${answer.filename.split('.').pop()}
${content}
\`\`\`
`
}).join('')

fs.writeFileSync('ANSWERS.md', txtAnswer)