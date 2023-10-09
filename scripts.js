function getComputerChoice(resultado) {
    const randomNum = Math.floor(Math.random() * 3 + 1);

    if (randomNum == 1) {
        resultado == console.log("Rock");
    }
    else if (randomNum == 2) {
        resultado == console.log("Paper");
    }
    else {
        resultado == console.log("Scissors");
    }
    return resultado;
  }
  console.log(getComputerChoice())

