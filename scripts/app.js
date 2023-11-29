const button = document.querySelectorAll(".button");
const rulesButton = document.querySelector(".rules");
const gameContainer = document.querySelector(".game-container");
const playerPickResultContainer = document.querySelector(".player-pick-result");
const compareResultContainer = document.querySelector(".compare-result");
const finalResultContainer = document.querySelector(".final-result");
const rulesContainer = document.querySelector(".rules-container");
const closeWindow = rulesContainer.querySelector(".close-window");

let stateOfTheGame = [
  {
    computerWins: localStorage.getItem("computerWins") || 0,
    playerWins: localStorage.getItem("playerWins") || 0,
    computerPick: null,
    playerPick: null,
  },
];

const updateScore = () => {
  const scoreElement = document.querySelector(".score-number");
  scoreElement.innerHTML =
    stateOfTheGame[0].playerWins - stateOfTheGame[0].computerWins;
};

const switchViews = () => {
  setTimeout(() => {
    toggleHidden(gameContainer);
  }, 1000);
  setTimeout(() => {
    toggleHidden(playerPickResultContainer);
  }, 2000);
  setTimeout(() => {
    toggleHidden(compareResultContainer);
  }, 3000);
  setTimeout(() => {
    toggleHidden(finalResultContainer);
  }, 4000);
};

const buttonOperation = () => {
  button.forEach((button) => {
    button.addEventListener("click", (event) => {
      const computerChoice = getComputerId();
      const playerChoice = getPlayerId(event);
      storeComputerPick(computerChoice);
      storePlayerPick(playerChoice);
      switchViews();
      let playerPick = stateOfTheGame[0].playerPick;
      let computerPick = stateOfTheGame[0].computerPick;
      let result = compareResult();
      updateGameView(playerPick, computerPick, result);
    });
  });
};

const initializeGame = () => {
  updateScore();
  buttonOperation();
};

initializeGame();

const openRules = () => {
  rulesContainer.classList.toggle("hidden");
};

closeWindow.addEventListener("click", () => {
  rulesContainer.classList.add("hidden");
});

rulesButton.addEventListener("click", () => {
  openRules();
});
