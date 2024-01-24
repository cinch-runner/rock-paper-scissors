// Assign computer and player choices
let getComputerChoice = () => {
  let options = ["zergling", "marine", "zealot"];
  return options[Math.floor(Math.random() * 3)];
};
let computerChoice = getComputerChoice();

let playerSelection;
// function assignPlayer = () => {

// }

// match to DOM
const zealot = document.querySelector("#zealot");
const marine = document.querySelector("#marine");
const zergling = document.querySelector("#zergling");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");

let playRound = (playerSelection, computerSelection) => {
  // zealot < marine < zergling

  if (playerSelection === computerChoice) {
    console.log("You tied!");
  } else if (playerSelection === "zergling" && computerChoice === "marine") {
    console.log("You win! Zergling beats marine");
  } else if (playerSelection === "marine" && computerChoice === "zealot") {
    console.log(`You win! Marine beats Zealot`);
  } else if (playerSelection === "zealot" && computerChoice === "zergling") {
    console.log("You win! Zealot beats Zergling");
  } else {
    console.log(`You lose! ${playerSelection} lost to ${computerChoice}`);
  }
};

zealot.addEventListener("click", playRound);
marine.addEventListener("click", playRound);
zergling.addEventListener("click", playRound);
