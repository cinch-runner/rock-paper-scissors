let getComputerChoice = () => {
  let options = ["zergling", "marine", "zealot"];
  return options[Math.floor(Math.random() * 3)];
};

// zealot < marine < zergling

let playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return `It's a tie!`;
  } else if (playerSelection === "zergling" && computerSelection === "marine") {
    return "You win! Zergling beats marine";
  } else if (playerSelection === "marine" && computerSelection === "zealot") {
    return `You win! Marine beats Zealot`;
  } else if (playerSelection === "zealot" && computerSelection === "zergling") {
    return "You win! Zealot beats Zergling";
  } else {
    return `You lose! ${playerSelection} lost to ${computerSelection}`;
  }
};

let game = (playerSelection, computerSelection) => {
  for (let i = 0; i < 5; i++) {
    return playRound(playerSelection, computerSelection);
  }
};

const playerSelection = "marine";
// prompt("Make a choice: Zealot, Marine, or Zergling");
const computerSelection = getComputerChoice();

console.log(game(playerSelection, computerSelection));
