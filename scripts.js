function getComputerChoice() { //Get a random generated computer choice
    const randomNum = Math.floor(Math.random() * 3);

    switch(randomNum) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
}
 
function getUserChoice() {
  let validatedInput = false;
  while(validatedInput == false) {
    const choice = prompt("Type your weapon");
    if(choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if(choiceInLower == "rock" || choiceInLower == "paper" || choiceInLower == "scissors") {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  }
  else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
    return "Player";
  }
  else {
    return "Computer"
  }
}

function playRound(playerSelection, computerSelection) {
  let result = "";

  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      result = "It's a Tie";
    }
    else if (computerSelection == "paper"){
      result = "You picked rock, computer picked paper. You Lose";
    }
    else {
      result = "You picked rock, computer picked scissors. You Win";
    }
  }
  else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      result = "You picked paper, computer picked rock. You Win";
    }
    else if (computerSelection == "paper"){
      result = "It's a Tie";
    }
    else {
      result = "You picked paper, computer picked scissors. You Lose";
    }
  }
  else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      result = "You picked scissors, computer picked rock. You Lose";
    }
    else if (computerSelection == "paper"){
      result = "You picked scissors, computer picked paper. You Win";
    }
    else {
      result = "It's a Tie";
    }
  }
  return result;
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;

  console.log("Welcome");
  for (let i = 0; i < 5; i ++) {
    const playerSelection = getUserChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      scorePlayer++;
    }
    else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      scoreComputer++;
    }
    console.log("Player Score: " + scorePlayer + " Computer Score: " + scoreComputer);
  }
  if (scorePlayer > scoreComputer) {
    console.log("Game Over. Player Won");
  }
  else if (scoreComputer > scorePlayer){
    console.log("Game Over. Computer Won");
  }
  else {
    console.log("It's a Draw");
  }
}

console.log(game());