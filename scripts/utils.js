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

const addComputerScore = () => {
  let currentComputerWins = parseInt(stateOfTheGame[0].computerWins) || 0;
  localStorage.setItem("computerWins", currentComputerWins + 1);
  stateOfTheGame = [
    {
      ...stateOfTheGame[0],
      computerWins: currentComputerWins + 1,
    },
  ];
};

const addPlayerScore = () => {
  let currentPlayerWins = parseInt(stateOfTheGame[0].playerWins) || 0;
  localStorage.setItem("playerWins", currentPlayerWins + 1);
  stateOfTheGame = [
    {
      ...stateOfTheGame[0],
      playerWins: currentPlayerWins + 1,
    },
  ];
};

const compareResult = () => {
  let scenario = [
    { beats: "rock", loses: "scissors" },
    { beats: "scissors", loses: "paper" },
    { beats: "paper", loses: "rock" },
  ];

  let resultText = document.querySelectorAll(".result .result-text");
  let playerPick = stateOfTheGame[0].playerPick;
  let computerPick = stateOfTheGame[0].computerPick;
  let isPlayerWinner = scenario.some(
    (rule) => rule.beats === playerPick && rule.loses === computerPick
  );

  if (playerPick === computerPick) {
    return (resultText.innerHTML = "DRAW");
  } else if (isPlayerWinner) {
    addPlayerScore();
    updateScore();
    return (resultText.innerHTML = "WIN");
  } else {
    addComputerScore();
    updateScore();
    return (resultText.innerHTML = "LOSE");
  }
};
