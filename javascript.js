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
const scoreText = document.querySelector(".score");
const outcomeText = document.querySelector(".outcome");

const playerSelection = document.querySelector(".selection");
playerSelection.addEventListener("click", (event) => {
    let playerChoice = event.target.id;
    if (CHOICE.includes(playerChoice)) {
        const computerChoice = getComputerChoice();
        const outcome = playRound(computerChoice, playerChoice);
        updateOutcome(outcome);
        updateScore();
        updateImg(playerChoice, computerChoice);
        if (playerScore === 5 || computerScore === 5) {
            endGame();
        }
    }
});

function updateOutcome(outcome) {
    outcomeText.textContent = outcome;
    switch(outcome) {
        case "You Win!":
            playerScore++;
            break;
        case "You Lose!":
            computerScore++;
            break;
    }
}

function updateScore() {
    scoreText.textContent = `Your Score: ${playerScore}`+ "\u00A0\u00A0\u00A0" + `CPU Score: ${computerScore}`;
}

function updateImg(playerChoice, computerChoice) {
    playerImg.src = `../img/${playerChoice}.svg`;
    cpuImg.src = `../img/${computerChoice}.svg`;
}


function endGame() {
    if (playerScore === 5) {
        updateImg("winner", "loser");
        outcomeText.textContent = "You're a winner!";
    }
    else {
        updateImg("loser", "winner");
        outcomeText.textContent = "Try again next time...";
    }
    playerScore = 0;
    computerScore = 0;
}