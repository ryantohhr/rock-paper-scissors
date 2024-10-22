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

} // Returns "Rock", "Paper" or "Scissors" (User's choice)

// Track scores with variables, starting at 0
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Make choices case-insensitive

    // Print round winner (use console.log)

    // Increment humanScore or computerScore depending on winner
}

function playGame() {
    // Play round 5 times
}