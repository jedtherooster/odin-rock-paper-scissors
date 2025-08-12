let userScore = 0;
let compScore = 0;
let roundsPlayed = 0;

const images = document.querySelectorAll("img");
const playerScoreH1 = document.querySelector("#player-score");
const computerScoreH1 = document.querySelector("#computer-score");
const gameResultH2 = document.querySelector(".game-result h2");

for(let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => playRound(images[i].id, getComputerChoice()));
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    
    switch (computerChoice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3: 
            return "scissors";
            break;
        default:
            return "Error";
    }
}

function playRound(userChoice, compChoice) {
    if (userChoice === compChoice) {
        updateScore("tie");
    } else if (userChoice === "rock" && compChoice === "scissors") {
        updateScore("user")
    } else if (userChoice === "paper" && compChoice === "rock") {
        updateScore("user")
    } else if (userChoice === "scissors" && compChoice === "paper") {
        updateScore("user")
    } else {
        updateScore("computer")
    }
}

function updateScore(winner) {
    if (userScore >= 5) {
        gameResultH2.textContent = "PLAYER has 5 points! Winning the game!"
    } else if (compScore >= 5) {
        gameResultH2.textContent = "COMPUTER has 5 points! Winning the game!"
    } else if (winner === "user") {
        userScore++;
        gameResultH2.textContent = "PLAYER has won!"
        playerScoreH1.textContent = userScore;
    } else if (winner === "computer") {
        compScore++;
        gameResultH2.textContent = "COMPUTER has won!"
        computerScoreH1.textContent = compScore;
    } else {
        gameResultH2.textContent = "TIE!"
    }
}


