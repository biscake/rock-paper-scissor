const CHOICE = ["rock", "paper", "scissor"];
const ROUNDS = 5;

function getComputerChoice() {
    return CHOICE[Math.floor(CHOICE.length * Math.random())];
}


function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return "Draw!"
    }
    else if ((computerChoice === "rock" && playerChoice === "scissor") ||
    (computerChoice === "paper" && playerChoice === "rock") ||
    (computerChoice === "scissor" && playerChoice === "paper")) {
            return "You Lose!";
        }
    else {
        return "You Win!";
    }
}

let playerScore = 0;
let computerScore = 0;

const playerSelection = document.querySelector(".selection");
playerSelection.addEventListener("click", (event) => {
    let playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const outcome = playRound(computerChoice, playerChoice);
    updateOutcome(outcome);
    updateScore();
});

function updateOutcome(outcome) {
    const outcomeText = document.querySelector(".outcome");
    outcomeText.textContent = outcome;
    switch(outcome) {
        case "You Win!":
            playerScore++;
        case "You Lose!":
            computerScore++;
    }
}

function updateScore() {
    const scoreText = document.querySelector(".score");
    scoreText.textContent = `Your Score: ${playerScore}`+ "\u00A0\u00A0\u00A0" + `CPU Score: ${computerScore}`;
}