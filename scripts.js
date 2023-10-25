let playScore = 0;
let compScore = 0;
const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorsButton = document.querySelector('#scissors-btn');
const outcomeDiv = document.querySelector('.outcome')
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');

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
      compScore++;
      const p = document.createElement('p');
      p.innerText = "You picked rock, computer picked paper. You Lose";
      outcomeDiv.appendChild(p);
    }
    else {
      playScore++;
      const p = document.createElement('p');
      p.innerText = "You picked rock, computer picked scissors. You Win";
      outcomeDiv.appendChild(p);
    }
  }
  else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      playScore++;
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
      compScore++;
      const p = document.createElement('p');
      p.innerText = "You picked paper, computer picked scissors. You Lose";
      outcomeDiv.appendChild(p);
    }
  }
  else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      compScore++;
      const p = document.createElement('p');
      p.innerText = "You picked scissors, computer picked rock. You Lose";
      outcomeDiv.appendChild(p);
    }
    else if (computerSelection == "paper"){
      playScore++;
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
  updateScores(playScore, compScore);
  checkWinner(playScore, compScore);
});

paperButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'paper';
  playRound(playerSelection, computerSelection);
  updateScores(playScore, compScore);
  checkWinner(playScore, compScore);
});

scissorsButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'scissors';
  playRound(playerSelection, computerSelection);
  updateScores(playScore, compScore);
  checkWinner(playScore, compScore);
});


function checkWinner(playScore, compScore) {
  const h2 = document.createElement('h2');
  if (playScore == 5 ) {
    h2.classList.add('player-won');
    h2.innerText = `You won ${playScore} to ${compScore}`;
  }
  if (compScore == 5) {
    h2.classList.add('computer-won');
    h2.innerText = `You lost ${playScore} to ${compScore}`;
  }
  outcomeDiv.append(h2);
}

function updateScores(playScore, compScore) {
  pScore.innerText = 'Player Score: ' + playScore;
  cScore.innerText = 'Computer Score: ' + compScore;
}
