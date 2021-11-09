const puppeteer = require('puppeteer')
const fs = require('fs')

async function main() {

  let urlsArr = fs.readFileSync('urls.json')
  urlsArr = JSON.parse(urlsArr)
  const answersArr = []


  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized'],
    defaultViewport: null
  });

  const page = await browser.newPage()

  for (const url of urlsArr.urls) {
    await page.goto(url)

    const topic = await page.$eval('.exmenuitemheader.active', el => {
      const title = el.textContent.replace(/([\.\/])/g, ' ').trim()
      return {
        title,
        name: title.toLowerCase().split(' ').join('-')
      }
    })

    const exercise = await page.$eval('.exbtn.active', el => {
      const title = el.textContent.trim()
      return {
        title,
        name: title.toLowerCase().split(' ').join('-')
      }
    })

    await page.click(".showanswerbutton")
    const textAnswer = await page.$eval("#showcorrectanswercontainer", parentElement => {
      return Array.from(parentElement.childNodes).map(el => {
        if (!el.tagName) return el.textContent
        if (el.tagName === 'INPUT') return el.value
        else return null
      }).filter(el => el).join('')
    })

    const pathExercise = `${topic.name}`

    answersArr.push({
      path: `${pathExercise}\\${exercise.name}`,
      content: textAnswer,
      info: {
        topic: topic.title,
        exercise: exercise.title
      }
    })

    console.log(`${pathExercise}\\${exercise.name}`);
  }

  fs.writeFileSync('answersData.json', JSON.stringify(answersArr), null, 4);
  await browser.close()
}

main()