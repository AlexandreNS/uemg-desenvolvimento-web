const defaultImgs = [
  { src: "img/1.jpg", name: "" },
  { src: "img/3.jpg", name: "" },
  { src: "img/5.jpg", name: "" },
  { src: "img/7.jpg", name: "" },
  { src: "img/9.jpg", name: "" },
  { src: "img/11.jpg", name: "" },
  { src: "img/13.jpg", name: "" },
  { src: "img/15.jpg", name: "" },
  { src: "img/17.jpg", name: "" },
  { src: "img/19.jpg", name: "" },
  { src: "img/21.jpg", name: "" },
  { src: "img/23.jpg", name: "" },
]

const cards = document.querySelectorAll("#game-area tr td img.front-face")

const shuffleCards = () => {
  [...defaultImgs, ...defaultImgs]
    .sort(() => Math.random() - 0.5)
    .forEach((img, idx) => cards[idx].src = img.src)
}