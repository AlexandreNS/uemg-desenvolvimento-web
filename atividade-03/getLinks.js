const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const url = 'https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_variables1'
const urlBase = 'https://www.w3schools.com/js/'

axios(url)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const urlsArr = []


    $('.exbtn', html).each(function () {
      const urlExercise = $(this).attr('href')
      if (urlExercise.search('exercise_js.asp') !== -1) urlsArr.push(`${urlBase}${urlExercise}`)
    })

    const urlsFilteredArr = urlsArr.reduce((acc, cur) => {
      if (cur.search('display_visibility') !== -1) acc.stop = true
      if (!acc.stop) acc.urls.push(cur)

      return acc
    }, { stop: false, urls: [] }).urls

    fs.writeFileSync('urls.json', JSON.stringify({ urls: urlsFilteredArr }), null, 4);
  }).catch(err => console.log(err))