const button = document.querySelectorAll(".button");
const rules = document.querySelector(".rules");
const rulesContainer = document.querySelector(".rules-container");
const playerPickResultContainer = document.querySelector(".player-pick-result");
const compareResultContainer = document.querySelector(".compare-result");
const finalResultContainer = document.querySelector(".final-result");
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
  document.querySelector(".game-container").classList.add("hidden");
  document.querySelector(".player-pick-result").classList.remove("hidden");
  document.querySelector(".player-pick-result").classList.add("hidden");
  document.querySelector(".compare-result").classList.remove("hidden");
  document.querySelector(".compare-result").classList.add("hidden");
  document.querySelector(".final-result").classList.remove("hidden");
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
      updateGameView(playerPick, computerPick);
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

rules.addEventListener("click", () => {
  openRules();
});
