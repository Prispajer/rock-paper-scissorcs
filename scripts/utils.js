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
  localStorage.setItem("computerWins", (stateOfTheGame[0].computerWins += 1));
};

const addPlayerScore = () => {
  localStorage.setItem("playerWins", (stateOfTheGame[0].playerWins += 1));
};

const compareResult = () => {
  let resultText = document.querySelectorAll(".result .result-text");
  if (stateOfTheGame[0].playerPick === stateOfTheGame[0].computerPick) {
    console.log("DRAW");
  } else if (
    stateOfTheGame[0].playerPick.length > stateOfTheGame[0].computerPick.length
  ) {
    console.log("WIN");
  } else {
    console.log("LOSE");
  }
};
