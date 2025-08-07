let userScore = 0;
let compScore = 0;
let roundsPlayed = 0;

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

function getUserChoice() {
    let userChoice = prompt("Enter your choice. || Rock || Paper || Scissors");
    return userChoice;
}

function playRound(userChoice, compChoice) {
    userChoice = userChoice.toLowerCase();

    if (userChoice === compChoice) {
        console.log("Tie");
        playGame();
    } else if (userChoice === "rock" && compChoice === "scissors") {
        userScore++;
        console.log("User wins!");
        console.log(`User: |${userScore}| Computer: |${compScore}|`);
        playGame();
    } else if (userChoice === "paper" && compChoice === "rock") {
        userScore++;
        console.log("User wins!");
        console.log(`User: |${userScore}| Computer: |${compScore}|`);
        playGame();
    } else if (userChoice === "scissors" && compChoice === "paper") {
        userScore++;
        console.log("User wins!");
        console.log(`User: |${userScore}| Computer: |${compScore}|`);
        playGame();
    } else {
        compScore++;
        console.log("Computer wins!");
        console.log(`User: |${userScore}| Computer: |${compScore}|`);
        playGame();
    }
}

function playGame() {
    if (roundsPlayed <= 5) {
        const userSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        roundsPlayed++;
        playRound(userSelection, computerSelection);
    }
}

playGame();




