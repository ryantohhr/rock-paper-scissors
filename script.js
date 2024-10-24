const results = document.querySelector(".results");

function getComputerChoice() {
    // Get random number (Math.random())
    let randomNum = Math.random();

    // Assign rock, paper and scissors values to equal divisions of possible numbers
    if (randomNum >= 0 && randomNum < (1 / 3)) {
        return "Rock";
    }
    else if (randomNum >= (1 / 3) && randomNum < (2 / 3)) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
} // Returns "Rock", "Paper" or "Scissors" (Computer's randomised choice)

// Track scores with variables, starting at 0
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Make choices case-insensitive
    humanChoiceCheck = humanChoice.toLowerCase();
    computerChoiceCheck = computerChoice.toLowerCase();

    // Compare choices
    let compare;
    switch (humanChoiceCheck) {
        case "rock": {
            switch (computerChoiceCheck) {
                case "rock": {
                    compare = 't';
                    break;
                }
                case "paper": {
                    compare = 'l';
                    break;
                }
                case "scissors": {
                    compare = 'w';
                    break;
                }
            }
            break;
        }
        case "paper": {
            switch (computerChoiceCheck) {
                case "rock": {
                    compare = 'w';
                    break;
                }
                case "paper": {
                    compare = 't';
                    break;
                }
                case "scissors": {
                    compare = 'l';
                    break;
                }
            }
            break;
        }
        case "scissors": {
            switch (computerChoiceCheck) {
                case "rock": {
                    compare = 'l';
                    break;
                }
                case "paper": {
                    compare = 'w';
                    break;
                }
                case "scissors": {
                    compare = 't';
                    break;
                }
            }
            break;
        }
    };

    // Create elements to display results
    const winloss = document.createElement("div");
    const humanScoreDisplay = document.createElement("div");
    const computerScoreDisplay = document.createElement("div");
    // Print round winner (use console.log)
    // Increment humanScore or computerScore depending on winner
    switch (compare) {
        case 'w': {
            humanScore++;
            winloss.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            break;
        }
        case 'l': {
            computerScore++;
            winloss.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            break;
        }
        case 't': {
            winloss.textContent = `It's a tie!`;
            break;
        }
    };
    results.appendChild(winloss);
    humanScoreDisplay.textContent = `Your score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer's score: ${computerScore}`;
    results.appendChild(humanScoreDisplay);
    results.appendChild(computerScoreDisplay);
}


const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener('click', function() {
    playRound("Rock", getComputerChoice());
});
paperBtn.addEventListener('click', function() {
    playRound("Paper", getComputerChoice());
});
scissorsBtn.addEventListener('click', function() {
    playRound("Scissors", getComputerChoice());
});