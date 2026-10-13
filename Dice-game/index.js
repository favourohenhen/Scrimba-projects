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

// Player history query selectors
let roundNumber = document.querySelectorAll(".round-num")
console.log(roundNumber)
let roundDice = document.querySelectorAll(".round-dice")
console.log(roundDice)
let roundWinner = document.querySelectorAll(".round-winner")
console.log(roundWinner)

function numberOfRounds() {
    let roundLabels = ["Round 1", "Round 2", "Round 3", "Round 4", "Round 5"]
    let diceValue = [userDice, computerDice]

    for (let i = 0; i < roundLabels.length; i++) {
        if (rollCount === 1 && roundLabels[i] === "Round 1") {
            roundNumber[i].textContent = roundLabels[i]
            roundDice[i].textContent = diceValue[0] + " VS " + diceValue[1]
            console.log(roundDice[i].textContent)
            console.log(roundNumber[i].textContent)
        }
        else if (rollCount === 2 && roundLabels[i] === "Round 2") {
            roundNumber[i].textContent = roundLabels[i]
            roundDice[i].textContent = diceValue[0] + " VS " + diceValue[1]
            console.log(roundDice[i].textContent)
            console.log(roundNumber[i].textContent)
        }
        else if (rollCount === 3 && roundLabels[i] === "Round 3") {
            roundNumber[i].textContent = roundLabels[i]
            roundDice[i].textContent = diceValue[0] + " VS " + diceValue[1]
            console.log(roundDice[i].textContent)
            console.log(roundNumber[i].textContent)
        }
        else if (rollCount === 4 && roundLabels[i] === "Round 4") {
            roundNumber[i].textContent = roundLabels[i]
            roundDice[i].textContent = diceValue[0] + " VS " + diceValue[1]
            console.log(roundDice[i].textContent)
            console.log(roundNumber[i].textContent)
        }
        else if (rollCount === 5 && roundLabels[i] === "Round 5") {
            roundNumber[i].textContent = roundLabels[i]
            roundDice[i].textContent = diceValue[0] + " VS " + diceValue[1]
            console.log(roundDice[i].textContent)
            console.log(roundNumber[i].textContent)
        }
    }



}

// roundNumber.textContent = roundNumber[2]
// console.log(roundNumber.textContent)
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

        // roundDice.textContent = diceValue[0] + " VS " + diceValue[1]
        // console.log(diceValue)
        // console.log(roundDice.textContent)

    } else {
        console.log("Game Over")

    }
    numberOfRounds()
}



function renderGame() {

    let eachRoundWinner =
        ["You win this round",
            "Computer wins this round",
            "Nobody wins this round"]
    //  let winnerRecord = [eachRoundWinner]
    //     console.log(winnerRecord)

    for (let i = 0; i < eachRoundWinner.length; i++) {

        if (userDice > computerDice && eachRoundWinner[i] === "You win this round") {
            messageEl.textContent = "You won"
            players.score1 += 1
            roundWinner[rollCount-1].textContent = "You win this round"
            console.log(roundWinner[i].textContent)

        } else if (computerDice > userDice && eachRoundWinner[i] === "Computer wins this round") {
            messageEl.textContent = "Computer won"
            players.score2 += 1
            roundWinner[rollCount-1].textContent = "Computer wins this round"
            console.log(roundWinner[i].textContent)

        } else if (userDice === computerDice && eachRoundWinner[i] === "Nobody wins this round") {
            messageEl.textContent = "Draw, no points"
            roundWinner[rollCount-1].textContent = "Nobody wins this round"
            console.log(roundWinner[i].textContent)
        }

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

let gameHistory = [
    {
        round: 1,
        userDice: "userDice",
        computerDice: 3,
        winner: "YOU"
    },
    {
        round: 2,
        userDice: 2,
        computerDice: 5,
        winner: "COMPUTER"
    }
]


