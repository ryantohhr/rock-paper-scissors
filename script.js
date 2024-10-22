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

function getHumanChoice() {
    // Prompt user for input (use prompt)
    let humanChoice = prompt("Enter your choice: ");

    return humanChoice;
} // Returns "Rock", "Paper" or "Scissors" (User's choice)

// Track scores with variables, starting at 0
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Make choices case-insensitive
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // Compare choices
    let compare;
    switch (humanChoice) {
        case "rock": {
            switch (computerChoice) {
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
            switch (computerChoice) {
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
            switch (computerChoice) {
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

    // Print round winner (use console.log)
    // Increment humanScore or computerScore depending on winner
    switch (compare) {
        case 'w': {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            break;
        }
        case 'l': {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            break;
        }
        case 't': {
            console.log(`It's a tie!`);
            break;
        }
    };
    console.log(`Your score: ${humanScore}\nComputer's score: ${computerScore}`)
}

function playGame() {
    // Play round 5 times
    for (let i = 0; i < 5; i++){
        console.log(`Round ${i+1}`);
        playRound(getHumanChoice(), getComputerChoice());
    };
}