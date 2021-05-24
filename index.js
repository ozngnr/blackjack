let firstCard = Math.round((Math.random() * 9)  + 2)
let secondCard = Math.round((Math.random() * 9)  + 2)
let sum = firstCard + secondCard
let hasBlackjack = false
let isPlaying = true
let message = ""


if (sum < 21) {
  message = "Do you want to draw a new card?"
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack!"
  hasBlackjack = true
} else {
  message = "You're out of the game."
  isPlaying = false
}

console.log(message)