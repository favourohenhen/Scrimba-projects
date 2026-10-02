let firstCard = 10
let secondCard = 1
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardEl = document.getElementById("card-el")

function startGame(){
    renderGame()
}
function renderGame() {
    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
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
    console.log("Drawing a new card from the deck!")

    let card = 2

    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
