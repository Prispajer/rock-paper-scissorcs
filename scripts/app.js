const button = document.querySelectorAll(".button");
const rulesButton = document.querySelector(".rules");
const gameContainer = document.querySelector(".game-container");
const playerPickResultContainer = document.querySelector(".player-pick-result");
const compareResultContainer = document.querySelector(".compare-result");
const finalResultContainer = document.querySelector(".final-result");
const rulesContainer = document.querySelector(".rules-container");
const playAgain = document.querySelectorAll(".result .play-again");
const main = document.querySelector("main");

let stateOfTheGame = [
  {
    computerWins: parseInt(localStorage.getItem("computerWins")) || 0,
    playerWins: parseInt(localStorage.getItem("playerWins")) || 0,
    computerPick: null,
    playerPick: null,
  },
];

const updateScore = () => {
  const scoreElement = document.querySelector(".score-number");
  scoreElement.innerHTML =
    stateOfTheGame[0].playerWins - stateOfTheGame[0].computerWins;
};

const clickedOption = () => {
  const computerChoice = getComputerId();
  const playerChoice = getPlayerId(event);
  storeComputerPick(computerChoice);
  storePlayerPick(playerChoice);
};

const buttonOperation = () => {
  button.forEach((button) => {
    button.addEventListener("click", (event) => {
      clickedOption();
      updateGameView();
      switchViews();
    });
  });
};

main.addEventListener("click", (event) => {
  const playAgainButton = event.target.closest(".play-again");

  if (playAgainButton) {
    finalResultContainer.classList.add("hidden");
    gameContainer.classList.remove("slide-left");
    gameContainer.classList.remove("hidden");
  }
});

const openRules = () => {
  const closeWindow = rulesContainer.querySelector(".close-window");
  rulesContainer.classList.toggle("hidden");
  closeWindow.addEventListener("click", () => {
    rulesContainer.classList.add("hidden");
  });
};

rulesButton.addEventListener("click", () => {
  openRules();
});

const initializeGame = () => {
  buttonOperation();
  updateScore();
};

initializeGame();
