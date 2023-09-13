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

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose a unit: ");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    console.log(`Round ${i + 1}: ${result}`);
  }
};

const results = game();
