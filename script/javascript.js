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

const playerImg = document.querySelector("#playerimg");
const cpuImg = document.querySelector("#cpuimg");

const playerSelection = document.querySelector(".selection");
playerSelection.addEventListener("click", (event) => {
    let playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const outcome = playRound(computerChoice, playerChoice);
    updateOutcome(outcome);
    updateScore();
    updateImg(playerChoice, computerChoice);
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

function updateImg(playerChoice, computerChoice) {
    playerImg.src = `../img/${playerChoice}.svg`;
    cpuImg.src = `../img/${computerChoice}.svg`;
}

if (playerScore === 5) {
    updateImg(winner, loser);
}
else if (computerScore === 5) {
    updateImg(loser, winner);
}

function restartGame() {

}