const fs = require('fs')

let answersArr = fs.readFileSync('answersData.json')
answersArr = JSON.parse(answersArr)

answersArr.forEach(answer => {
  if (answer.content.search('</') !== -1)
    answer.filename = answer.path + '.html'
  else
    answer.filename = answer.path + '.js'

  const pathExercise = answer.info.topic.toLowerCase().split(' ').join('-')
  if (!fs.existsSync(pathExercise)) fs.mkdirSync(pathExercise)

  fs.writeFileSync(answer.filename, answer.content)
  fs.writeFileSync('answersData.json', JSON.stringify(answersArr), null, 4);
  console.log(answer.path);
})