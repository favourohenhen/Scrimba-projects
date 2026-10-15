let players = {
    name1: "YOU",
    name2: "COMPUTER",
    score1: 0,
    score2: 0,

}


const userEl = document.getElementById("user-el")
const computerEl = document.getElementById("computer-el")
const countEl = document.getElementById("count-el")
const player1El = document.getElementById("player1-el")
const player2El = document.getElementById("player2-el")
const score1El = document.getElementById("score1-el")
const score2El = document.getElementById("score2-el")
const messageEl = document.getElementById("message-el")
const rollBtn = document.getElementById("rollbtn")

// Winner border hightlight
userCard = document.getElementById("user-card")
computerCard = document.getElementById("computer-card")
userWinner = document.getElementById("user-winner")
computerWinner = document.getElementById("computer-winner")

// Final winner modal card
const gameModal = document.getElementById("game-modal")
const modalBackDrop = document.getElementById("modal-backdrop")
const Modalclose = document.getElementById("close-modal")
const winnerEL = document.querySelector(".winner-name")
const winnerMessage = document.querySelector(".win-message")
const nameEl = document.querySelector(".name")
const winner1Score = document.getElementById("score1")
const winner2Score = document.getElementById("score2")
const gameDraw = document.getElementById("icon")
console.log(winnerEL)
console.log(winnerMessage)
// console.log(gameModal)

// console.log(userCard)
// console.log(computerCard)

player1El.textContent = players.name1
player2El.textContent = players.name2
score1El.textContent = "Score: "
score2El.textContent = "Score: "


let userDice = 0
let computerDice = 0
let rollCount = 0
let scoreCount = 0
let message = messageEl


// Player history query selectors
const roundNumber = document.querySelectorAll(".round-num")
// console.log(roundNumber)
const roundDice = document.querySelectorAll(".round-dice")
// console.log(roundDice)
const roundWinner = document.querySelectorAll(".round-winner")
// console.log(roundWinner)


function numberOfRounds() {
    let roundLabels = ["Round 1", "Round 2", "Round 3", "Round 4", "Round 5"]
    let diceValue = [userDice, computerDice]

    for (let i = 0; i < roundLabels.length; i++) {
        if (rollCount === i + 1) {
            roundNumber[i].textContent = roundLabels[i]
            roundDice[i].textContent = diceValue[0] + " VS " + diceValue[1]
        }
    }
}

function winnerBorder() {
    let winner1 = "YOU 🏆"
    let winner2 = "COMPUTER 🏆"
    if (computerDice > userDice) {
        computerCard.style.borderColor = "#9333ea"
        player2El.textContent = winner2
        userCard.style.borderColor = "white"
        player1El.textContent = "YOU"
    } else if (userDice > computerDice) {
        userCard.style.borderColor = "#9333ea"
        player1El.textContent = winner1
        computerCard.style.borderColor = "white"
        player2El.textContent = "COMPUTER"
    } else {
        computerCard.style.borderColor = "white"
        userCard.style.borderColor = "white"
        player1El.textContent = "YOU"
        player2El.textContent = "COMPUTER"
    }
}

// GAME MAIN LOGIC

function rollDice() {
    if (rollCount < 5) {
        // Storing random numbers in a variable
        userDice = Math.floor(Math.random() * 6) + 1
        // console.log(userDice)

        computerDice = Math.floor(Math.random() * 6) + 1
        // console.log(computerDice)

        // Showing the random number on screen
        userEl.textContent = userDice
        computerEl.textContent = computerDice

        // Rounds counter
        rollCount += 1
        countEl.textContent = rollCount
        renderGame()

        // Roll dice disable when count is 5
        rollBtn.disabled = rollCount >= 5

    } else {
        console.log("Game Over")

    }
    numberOfRounds()
    winnerBorder()
    winnerModal()

}



function renderGame() {

    let eachRoundWinner =
        ["You 🏆",
            "Computer 🏆",
            "Draw 🤝"]

    for (let i = 0; i < eachRoundWinner.length; i++) {

        if (userDice > computerDice && eachRoundWinner[i] === "You 🏆") {
            // messageEl.textContent = "You won"
            messageEl.textContent = ""
            players.score1 += 1
            roundWinner[rollCount - 1].textContent = "You 🏆"
            // console.log(roundWinner[i].textContent)

        } else if (computerDice > userDice && eachRoundWinner[i] === "Computer 🏆") {
            // messageEl.textContent = "Computer won"
            messageEl.textContent = ""
            players.score2 += 1
            roundWinner[rollCount - 1].textContent = "Computer 🏆"
            // console.log(roundWinner[i].textContent)

        } else if (userDice === computerDice && eachRoundWinner[i] === "Draw 🤝") {
            messageEl.textContent = "Draw, no points"
            // messageEl.textContent = ""
            roundWinner[rollCount - 1].textContent = "Draw 🤝"
            // console.log(roundWinner[i].textContent)
        }

    }


    score1El.textContent = "Score: " + players.score1
    score2El.textContent = "Score: " + players.score2


}
function winnerModal() {
    if (rollCount === 5) {
        gameModal.style.display = "block"
        modalBackDrop.style.display = "block"
        winner1Score.textContent = players.score1
        winner2Score.textContent = players.score2

        if (players.score1 > players.score2) {
            console.log("You win 🏆")
            winnerEL.textContent = "You won! 🎉"
            winnerMessage.textContent = "Congratulations!"
        } else if (players.score2 > players.score1) {
            console.log("Computer win 🏆")
            winnerEL.textContent = "Computer won! 🎉"
            winnerMessage.textContent = ""
        } else {
            console.log("it's a Draw ")
            winnerEL.textContent = "It's a Draw "
            gameDraw.textContent = "🤝"
            winnerMessage.textContent = ""
        }
    } else {
        gameModal.style.display = "none"
        modalBackDrop.style.display = "none"
    }

}

function closeModal() {
    gameModal.style.display = "none"
    modalBackDrop.style.display = "none"
}

function restart() {
    userDice = 0
    computerDice = 0

    userEl.textContent = userDice
    computerEl.textContent = computerDice

    rollCount = 0
    countEl.textContent = rollCount

    rollBtn.disabled = false
    messageEl.textContent = "READY ?"
    // console.log(messageEl.textContent)

    // Resetting the scores
    players.score1 = 0
    players.score2 = 0
    score1El.textContent = "Score: " + 0
    score2El.textContent = "Score: " + 0
    // console.log(players.score1)

    // round history reset
    for (let i = 0; i < roundWinner.length; i++) {
        roundWinner[i].textContent = ""
    }
    for (let i = 0; i < roundDice.length; i++) {
        roundDice[i].textContent = ""
    }
    for (let i = 0; i < roundNumber.length; i++) {
        roundNumber[i].textContent = ""
    }
    computerCard.style.borderColor = "white"
    userCard.style.borderColor = "white"

    player2El.textContent = "COMPUTER"
    player1El.textContent = "YOU"

    gameModal.style.display = "none"
    modalBackDrop.style.display = "none"
}

