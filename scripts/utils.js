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

// const addPlayerScore = () => {
//   localStorage.setItem("playerWins", (stateOfTheGame[0].playerWins += 1));
// };

// const addComputerScore = () => {
//   stateOfTheGame[0].computerWins += 1;
// };

// const compareResult = (computerResult, playerResult) => {
//   if (computerResult != playerResult) {
//     console.log("WIN");
//   } else if (computerResult === playerResult) {
//     console.log("DRAW");
//   } else {
//     console.log("LOSE");
//   }
// }

// const addPlayerScore = () => {
//   localStorage.setItem("playerWins", (stateOfTheGame[0].playerWins += 1));
// };

// const addComputerScore = () => {
//   stateOfTheGame[0].computerWins += 1;
// };
