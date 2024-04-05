const CHOICE = ["rock", "paper", "scissor"];
const ROUNDS = 5;

function getComputerChoice(choice) {
    return choice[Math.floor(choice.length * Math.random())];
}

function playerSelection() {
    let userInput;
    do
    {
        userInput = prompt("Your Choice: ");
    }
    while (!CHOICE.includes(userInput.toLowerCase()))
    return userInput.toLowerCase();
}

function playRound(getComputerChoice, playerSelection) {
    if (getComputerChoice === playerSelection) {
        return "Draw!"
    }
    else if ((getComputerChoice === "rock" && playerSelection === "scissor") ||
    (getComputerChoice === "paper" && playerSelection === "rock") ||
    (getComputerChoice === "scissor" && playerSelection === "paper")) {
            return "You lose!";
        }
    else {
        return "You Win!";
    }
}

