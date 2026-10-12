let players = {
    name1: "YOU",
    name2: "COMPUTER",
    score1: 0,
    score2: 0,

}


let userEl = document.getElementById("user-el")
let computerEl = document.getElementById("computer-el")
let countEl = document.getElementById("count-el")
let player1El = document.getElementById("player1-el")
let player2El = document.getElementById("player2-el")
let score1El = document.getElementById("score1-el")
let score2El = document.getElementById("score2-el")
let messageEl = document.getElementById("message-el")
let rollBtn = document.getElementById("rollbtn")


player1El.textContent = players.name1
player2El.textContent = players.name2
score1El.textContent = "Score: "
score2El.textContent = "Score: "


let userDice = 0
let computerDice = 0
let rollCount = 0
let scoreCount = 0
let message = messageEl

// Next up: Round history(ARRAY) & CHANGING THE UI DESIGN!!!!


// GAME MAIN LOGIC

function rollDice() {
    if (rollCount < 5) {
        // Storing random numbers in a variable
        userDice = Math.floor(Math.random() * 6) + 1
        console.log(userDice)

        computerDice = Math.floor(Math.random() * 6) + 1
        console.log(computerDice)

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
}

function renderGame() {
    if (userDice > computerDice) {
        messageEl.textContent = "You won"
        players.score1 += 1

    } else if (computerDice > userDice) {
        message.textContent = "Computer won"
        players.score2 += 1

    } else if (userDice === computerDice) {
        messageEl.textContent = "Draw, no points"
    }


    score1El.textContent = "Score: " + players.score1
    score2El.textContent = "Score: " + players.score2
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
    console.log(messageEl.textContent)

    // Resetting the scores
    players.score1 = 0
    players.score2 = 0
    score1El.textContent = "Score: " + 0
    score2El.textContent = "Score: " + 0
    console.log(players.score1)

}





