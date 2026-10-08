let player = {
    name: "Chips",
    chips: 0
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let gameStarted = false
let message = ""

const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardEl = document.getElementById("card-el")
const playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function randomNumber() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }

}
function startGame() {
    
    if (gameStarted === false) {
        gameStarted = true
        isAlive = true
        hasBlackJack = false
        let firstCard = randomNumber()
        let secondCard = randomNumber()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }

    // console.log("gameStarted", gameStarted)
    // console.log("isAlive:", isAlive)
    // console.log("hasBlackJack:", hasBlackJack)

}
function renderGame() {
    cardEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"

    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = randomNumber()

        // console.log("New card:", card)

        sum += card
        cards.push(card)

        // console.log("New sum:", sum)
        // console.log("Cards:", cards)

        renderGame()

        // console.log("isAlive:", isAlive)
        // console.log("hasBlackJack:", hasBlackJack)
    }

}

function restartGame() {
    isAlive = false
    hasBlackJack = false
    gameStarted = false
    cards = []
    sum = 0
    console.log(cards)

    console.log(sum)
    cardEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    message = "Want to play a round?"
    messageEl.textContent = message

}
