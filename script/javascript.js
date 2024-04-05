const CHOICE = ["rock", "paper", "scissor"];
const ROUNDS = 5;

function getComputerChoice(choice) {
    return choice[Math.floor(choice.length * Math.random())];
}


function playRound(computerChoice, playerSelection) {
    if (computerChoice === playerSelection) {
        return "Draw!"
    }
    else if ((computerChoice === "rock" && playerSelection === "scissor") ||
    (computerChoice === "paper" && playerSelection === "rock") ||
    (computerChoice === "scissor" && playerSelection === "paper")) {
            return "You lose!";
        }
    else {
        return "You Win!";
    }
}

let playerScore = 0;
let computerScore = 0;

const playerSelection = document.querySelector("#choice");
playerSelection.addEventListener("click", (event) => {
    const div = document.querySelector("#result");
    const result = document.createElement("p");


    let target = event.target;
    let computerChoice = getComputerChoice(CHOICE);
    const outcome = playRound(computerChoice, target.id);

    result.textContent = outcome;
    div.appendChild(result);
    switch(outcome) {
        case "You Win!":
            playerScore++;
        case "You lose!":
            computerScore++;
    }
    if (playerScore === 5|| computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        div.removeChild(result);
    }
});