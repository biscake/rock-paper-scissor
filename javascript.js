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
    if (getComputerChoice === "scissor") 
    {
        if (getPlayerChoice === "rock") {
            return "You Win!"
        }
        else {
            return "You lose!"
        }
    }
    if (getComputerChoice === "paper") 
    {
        if (getPlayerChoice === "scissor") {
            return "You Win!"
        }
        else {
            return "You lose!"
        }
    }
    if (getComputerChoice === "rock") 
    {
        if (getPlayerChoice === "paper") {
            return "You Win!"
        }
        else {
            return "You lose!"
        }
    }
}

for (let round = 0; round < ROUNDS; round++)
{
    console.log(playRound(getComputerChoice(CHOICE), getPlayerChoice()));
}
