let sum = 0
let cards = []
let hasBlackjack = false
let isPlaying = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

function getRandomCard() {
  const randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber === 1) {
    return 11
  } else if (randomNumber > 10) {
    return 10 
  }
  return randomNumber
}

function startGame() {
  isPlaying = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}
function renderGame() {
  const cardsStr = cards.join(" - ")
  cardsEl.textContent = "Cards: " + cardsStr
  sumEl.textContent = "Total: " + sum 

  if (sum < 21) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackjack = true
  } else {
    message = "You're out of the game." 
    isPlaying = false
  }
  messageEl.textContent = message
}

function newCard() {
  let newCard = getRandomCard()
  sum += newCard
  cards.push(newCard)
  renderGame();
}

const startBtn = document.getElementById('start-btn')
const newCardBtn = document.getElementById('newcard-btn')
startBtn.addEventListener('click', startGame)
newCardBtn.addEventListener('click', newCard)