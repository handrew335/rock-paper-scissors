function getComputerChoice(resultado) {
    const randomNum = Math.floor(Math.random() * 3 + 1);

    if (randomNum == 1) {
        result = "rock";
    }
    else if (randomNum == 2) {
        result = "paper";
    }
    else {
        result = "scissors";
    }
    return result;
}
  
function playRound(playerSelection, computerSelection) {
  // your code here!
  let result = "";

  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      result = "Tie!";
    }
    else if (computerSelection == "paper"){
      result = "Lose!";
    }
    else {
      result = "Win!";
    }
  }
  else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      result = "Win!";
    }
    else if (computerSelection == "paper"){
      result = "Tie!";
    }
    else {
      result = "Lose!";
    }
  }
  else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      result = "Lose!";
    }
    else if (computerSelection == "paper"){
      result = "Win!";
    }
    else {
      result = "Tie!";
    }
  }
  return result;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
