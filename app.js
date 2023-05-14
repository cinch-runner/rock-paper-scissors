function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `Player wins!`;
  } else {
    return `Computer wins!`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    return playRound();
  }
}

const playerSelection = prompt("Choose your weapon: ");
const computerSelection = getComputerChoice();

console.log(game(), `Computer chose ${computerSelection}`);
