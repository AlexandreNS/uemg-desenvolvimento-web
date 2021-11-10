function addClassElement(element, ...classNames) {
  element.className = [...new Set([...(element.className || "")
    .split(" "), ...classNames])]
    .join(" ")
}

function removeClassElement(element, ...classNames) {
  element.className = (element.className || "")
    .split(" ")
    .filter((labelName) => !classNames.includes(labelName))
    .join(" ")
}

const defaultImgs = [
  { src: "img/1.jpg", name: "trixie" },
  { src: "img/3.jpg", name: "all-characters" },
  { src: "img/5.jpg", name: "buzz-lightyear" },
  { src: "img/7.jpg", name: "hamm" },
  { src: "img/9.jpg", name: "jessie-vaquerita" },
  { src: "img/11.jpg", name: "sheriff-woody" },
  { src: "img/13.jpg", name: "rex" },
  { src: "img/15.jpg", name: "slinky dog" },
  { src: "img/17.jpg", name: "barbie" },
  { src: "img/19.jpg", name: "mrs-potato-head" },
  { src: "img/21.jpg", name: "mr-potato-head" },
  { src: "img/23.jpg", name: "pink-teddy-bear" },
]

const cards = document.querySelectorAll("#game-area tr > td > div")
const sortBtn = document.getElementById("sort-btn")
const msgDiv = document.getElementById("msg-game")

const gameObject = {
  playerName: 'Nome do Jogador',
  cards: [],
  cardBackFace: '',
  turns: 0,
  cardsClicked: [],
  activeMatch: false,
  rightCards: 0,
  unTapCard(ev) {
    if (!this.activeMatch) return false
    if (this.cardsClicked.length === 2) return false
    this.cardsClicked.push(ev.target.dataset)

    addClassElement(cards[ev.target.dataset.id], 'front-card')
    removeClassElement(cards[ev.target.dataset.id], 'back-card')

    if (this.cardsClicked.length === 2) {
      this.turns++
      if (this.cardsClicked[0].name === this.cardsClicked[1].name) {
        this.rightCards++
        this.cardsClicked = []
        this.handleMsgGame(`Parabéns, vc tem ${this.rightCards} ${this.rightCards - 1 ? "pts" : "pt"}!`)
        this.handleFinishGame()
      } else {
        setTimeout(() => {
          removeClassElement(cards[this.cardsClicked[0].id], 'front-card')
          removeClassElement(cards[this.cardsClicked[1].id], 'front-card')

          addClassElement(cards[this.cardsClicked[0].id], 'back-card')
          addClassElement(cards[this.cardsClicked[1].id], 'back-card')
          this.cardsClicked = []
          this.handleMsgGame(`Vc errou : (, tente novamente!`)
        }, 400)
      }
    }
  },
  handleFinishGame() {
    if (this.rightCards >= 12) {
      setTimeout(() => {
        Array.from(cards)
          .forEach((c) => {
            removeClassElement(c, 'front-card')
            addClassElement(c, 'back-card')
          })
        this.handleMsgGame(`Parabéns \\o\/, vc terminou o jogo!`)
      }, 1000)
      setTimeout(() => {
        this.resetGame()
      }, 1700)
    }
  },
  resetGame() {
    this.turns = 0
    this.cardsClicked = []
    this.activeMatch = false
    this.rightCards = 0
    sortBtn.disabled = false
    Array.from(cards)
      .forEach((c, idx) => {
        setTimeout(() => addClassElement(c, 'unsorted'), idx % 6 * 150 + 150)
      })
  },
  shuffleCards() {
    [...defaultImgs, ...defaultImgs]
      .sort(() => Math.random() - 0.5)
      .forEach((img, idx) => {
        cards[idx].querySelector(".front-face").src = img.src
        cards[idx].querySelector(".back-face").dataset.name = img.name
        cards[idx].querySelector(".back-face").dataset.id = idx
      })

    Array.from(cards)
      .forEach((c, idx, array) => {
        setTimeout(() => {
          removeClassElement(c, 'unsorted')
          if (array.length - 1 === idx) this.activeMatch = true
        }, idx % 6 * 150 + 150)
      })
    sortBtn.disabled = true
    this.handleMsgGame("Jogo iniciado!")
  },
  setGame() {
    sortBtn.addEventListener('click', this.shuffleCards.bind(this))
    Array.from(cards)
      .forEach((c) => c.querySelector('img.back-face').addEventListener('click', this.unTapCard.bind(this)))
  },
  handleMsgGame(msg) {
    const pTag = document.createElement("p");
    const spanTag = document.createElement("span");

    const dateNow = new Date
    const hoursStr = dateNow.getHours() >= 10 ? dateNow.getHours() : '0' + dateNow.getHours()
    const minutesStr = dateNow.getMinutes() >= 10 ? dateNow.getMinutes() : '0' + dateNow.getMinutes()
    const secondsStr = dateNow.getSeconds() >= 10 ? dateNow.getSeconds() : '0' + dateNow.getSeconds()
    const dateNowText = document.createTextNode(`${hoursStr}:${minutesStr}:${secondsStr}`)
    spanTag.appendChild(dateNowText)

    const textLog = document.createTextNode(` - ${msg}`);

    pTag.append(spanTag)
    pTag.appendChild(textLog);
    msgDiv.appendChild(pTag);

    if (msgDiv.childElementCount > 5) {
      const allMsgs = Array.from(msgDiv.childNodes)
      allMsgs.slice(0, allMsgs.length - 5).forEach((msgElement) => {
        msgElement.style.opacity = 0
        setTimeout(() => msgDiv.removeChild(msgElement), 1000)
      })
    }
  }
}

gameObject.setGame()