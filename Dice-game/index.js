let players = {
    name1: "YOU",
    name2: "COMPUTER",
    score1: "Score: ",
    score2: "Score: "
}

let userEl = document.getElementById("user-el")
let computerEl = document.getElementById("computer-el")
let countEl = document.getElementById("count-el")
let player1El = document.getElementById("player1-el")
let player2El = document.getElementById("player2-el")
let score1El = document.getElementById("score1-el")
let score2El = document.getElementById("score2-el")
let rollBtn = document.getElementById("rollbtn")


player1El.textContent = players.name1 
player2El.textContent = players.name2 
score1El.textContent = players.score1
score2El.textContent = players.score2

let userDice = 0
let computerDice = 0
let rollCount = 0




// GAME MAIN LOGIC

function rollDice() {
    if (rollCount < 5 ) {
        userDice = Math.floor(Math.random() * 6) + 1
        console.log(userDice)

        computerDice = Math.floor(Math.random() * 6) + 1
        console.log(computerDice)

        userEl.textContent = userDice
        computerEl.textContent = computerDice

        countEl.textContent = rollCount
        renderGame()
          rollBtn.disabled = rollCount >= 5
          
    
    } else {
        console.log("Game Over")
        // rollBtn.disabled = true
    }

    // Why is the rolldice btn not diabled when the count is 5/5 immediately

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
    countEl.textContent = rollCount

    rollBtn.disabled = false
}





