// match to DOM
const zealot = document.querySelector("#zealot");
const marine = document.querySelector("#marine");
const zergling = document.querySelector("#zergling");
let playerScore = 0;
let playerScoreElement = document.querySelector("#player-score");
playerScoreElement.textContent = playerScore;
let computerScore = 0;
let computerScoreElement = document.querySelector("#computer-score");
computerScoreElement.textContent = computerScore;
let roundResultElement = document.querySelector("#round-result");
let roundResultValue = "";

let playerSelection;
let computerChoice;

// Assign computer choice
let getComputerChoice = () => {
  let options = ["zergling", "marine", "zealot"];
  return options[Math.floor(Math.random() * 3)];
};

function assignPlayer(choice) {
  playerSelection = choice;
  computerChoice = getComputerChoice();
  playRound(playerSelection, computerChoice);
}

let playRound = (playerSelection, getComputerChoice) => {
  // zealot beats zergling, zergling beats marine, marine beats zealot
  switch (playerSelection + computerChoice) {
    case "zealotzergling":
    case "marinezealot":
    case "zerglingmarine":
      roundResultElement.textContent = `You win! ${playerSelection} beats ${computerChoice}.`;
      playerScore++;
      playerScoreElement.textContent = playerScore;
      break;
    case "zealotmarine":
    case "marinezergling":
    case "zerglingzealot":
      roundResultElement.textContent = `You lose! ${playerSelection} lost to ${computerChoice}.`;
      computerScore++;
      computerScoreElement.textContent = computerScore;
      break;
    case "marinemarine":
    case "zealotzealot":
    case "zerglingzergling":
      roundResultElement.textContent = "It's a tie!";
      break;
  }
};

zealot.addEventListener("click", () => assignPlayer("zealot"));
marine.addEventListener("click", () => assignPlayer("marine"));
zergling.addEventListener("click", () => assignPlayer("zergling"));
