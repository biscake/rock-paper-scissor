const CHOICE = ["rock", "paper", "scissor"];
const ROUNDS = 5;

function getComputerChoice(choice) {
    return choice[Math.floor(choice.length * Math.random())];
}

function getPlayerChoice() {
    let userInput;
    do
    {
        userInput = prompt("Your Choice: ");
    }
    while (!CHOICE.includes(userInput.toLowerCase()))
    return userInput.toLowerCase();
}

function playRound(getComputerChoice, getPlayerChoice) {
    if (getComputerChoice === getPlayerChoice) {
        return "Draw!"
    }
    else if ((getComputerChoice === "rock" && getPlayerChoice === "scissor") ||
    (getComputerChoice === "paper" && getPlayerChoice === "rock") ||
    (getComputerChoice === "scissor" && getPlayerChoice === "paper")) {
            return "You lose!";
        }
    else {
        return "You Win!";
    }
}

for (let round = 0; round < ROUNDS; round++)
{
    console.log(playRound(getComputerChoice(CHOICE), getPlayerChoice()));
}
