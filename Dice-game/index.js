let players = {
    name1: "YOU",
    name2: "COMPUTER",
    point1: 0,
    point2: 0
}

let userEl = document.getElementById("user-el")
let computerEl = document.getElementById("computer-el")
let countEl = document.getElementById("count-el")
let player1El = document.getElementById("player1-el")
let player2El = document.getElementById("player2-el")

player1El.textContent = players.name1 + ": " + players.point1
player2El.textContent = players.name2 + ": " + players.point2


let userDice = 0
let computerDice = 0
let rollCount = 0
let gameStart = false

function rollDice() {

    // console.log(rollCount)


    if (rollCount <= 4) {

        userDice = Math.floor(Math.random() * 6) + 1
        console.log(userDice)

        computerDice = Math.floor(Math.random() * 6) + 1
        console.log(computerDice)

        userEl.textContent = userDice
        computerEl.textContent = computerDice
        rollCount += 1
        countEl.textContent = rollCount
        renderGame()

    } else {
        console.log("Game Over")
    }

    player1El.point1.textContent = userWon
    player2El.point2.textContent = computerWon

}

function renderGame() {
    if (userDice > computerDice) {
        console.log("You won")

    } else if (computerDice > userDice) {
        console.log("Computer won")

    } else if (userDice === computerDice) {
        console.log("Draw, no points")
    }

}


function restart() {
    userDice = 0
    computerDice = 0

    userEl.textContent = userDice
    computerEl.textContent = computerDice

    rollCount = 0
}



// GAME MAIN LOGIC

