const storePlayerPick = (playerPick) => {
  stateOfTheGame = [
    {
      ...stateOfTheGame[0],
      playerPick,
    },
  ];
};

const storeComputerPick = (computerPick) => {
  stateOfTheGame = [
    {
      ...stateOfTheGame[0],
      computerPick,
    },
  ];
};

const getComputerId = () => {
  const choices = ["paper", "scissors", "rock"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const getPlayerId = (event) => {
  let choiceId = event.target.dataset.choiceId;
  return choiceId;
};

const toggleHidden = (element) => {
  element.classList.toggle("hidden");
};

const addComputerScore = () => {
  const currentComputerWins = parseInt(stateOfTheGame[0].computerWins) || 0;
  localStorage.setItem("computerWins", currentComputerWins + 1);
};

const addPlayerScore = () => {
  const currentPlayerWins = parseInt(stateOfTheGame[0].playerWins) || 0;
  localStorage.setItem("playerWins", currentPlayerWins + 1);
};

const compareResult = () => {
  let resultText = document.querySelectorAll(".result .result-text");
  if (stateOfTheGame[0].playerPick === stateOfTheGame[0].computerPick) {
    return (resultText.innerHTML = "DRAW");
  } else if (
    stateOfTheGame[0].playerPick.length > stateOfTheGame[0].computerPick.length
  ) {
    addPlayerScore();
    updateScore();
    return (resultText.innerHTML = "WIN");
  } else {
    addComputerScore();
    updateScore();
    return (resultText.innerHTML = "LOSE");
  }
};
