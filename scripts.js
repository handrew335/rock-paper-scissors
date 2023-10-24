const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorsButton = document.querySelector('#scissors-btn');
const outcomeDiv = document.querySelector('.outcome')

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

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      const p = document.createElement('p');
      p.innerText = "It's a tie you both picked rock";
      outcomeDiv.appendChild(p);
    }
    else if (computerSelection == "paper"){
      const p = document.createElement('p');
      p.innerText = "You picked rock, computer picked paper. You Lose";
      outcomeDiv.appendChild(p);
    }
    else {
      const p = document.createElement('p');
      p.innerText = "You picked rock, computer picked scissors. You Win";
      outcomeDiv.appendChild(p);
    }
  }
  else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      const p = document.createElement('p');
      p.innerText = "You picked paper, computer picked rock. You Win";
      outcomeDiv.appendChild(p);
    }
    else if (computerSelection == "paper"){
      const p = document.createElement('p');
      p.innerText = "It's a tie you both picked paper";
      outcomeDiv.appendChild(p);
    }
    else {
      const p = document.createElement('p');
      p.innerText = "You picked paper, computer picked scissors. You Lose";
      outcomeDiv.appendChild(p);
    }
  }
  else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      const p = document.createElement('p');
      p.innerText = "You picked scissors, computer picked rock. You Lose";
      outcomeDiv.appendChild(p);
    }
    else if (computerSelection == "paper"){
      const p = document.createElement('p');
      p.innerText = "You picked scissors, computer picked paper. You Win";
      outcomeDiv.appendChild(p);
    }
    else {
      const p = document.createElement('p');
      p.innerText = "It's a tie you both picked scissors";
      outcomeDiv.appendChild(p);
    }
  }
}

rockButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'rock';
  playRound(playerSelection, computerSelection);
});

paperButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'paper';
  playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'scissors';
  playRound(playerSelection, computerSelection);
});


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

/* function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;

  console.log("Welcome");
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

console.log(game()); */