let userEl = document.getElementById("user-el")
let computerEl = document.getElementById("computer-el")

let userDice = 0
let computerDice = 0

function rollDice() {

    let userDice = Math.floor(Math.random() * 6) + 1
    console.log(userDice)

    let computerDice = Math.floor(Math.random() * 6) + 1
    console.log(computerDice)

    userEl.textContent = userDice
    computerEl.textContent = computerDice
}

function restart() {
    userDice = 0
    computerDice = 0

    userEl.textContent = userDice
    computerEl.textContent = computerDice

     
}
