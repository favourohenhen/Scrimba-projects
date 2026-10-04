let firstCard = randomNumber()
let secondCard = randomNumber()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardEl = document.getElementById("card-el")

console.log(cards)

function randomNumber() {
    return Math.floor(Math.random() * 13) + 1

}
function startGame() {
    renderGame()
}
function renderGame() {
    cardEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"

    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {

    let card = randomNumber()
    sum += card
    cards.push(card)
    renderGame()
    console.log("Do you want to draw another card?")
}
