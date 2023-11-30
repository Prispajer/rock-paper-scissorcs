const button = document.querySelectorAll(".button");
const rulesButton = document.querySelector(".rules");
const gameContainer = document.querySelector(".game-container");
const playerPickResultContainer = document.querySelector(".player-pick-result");
const compareResultContainer = document.querySelector(".compare-result");
const finalResultContainer = document.querySelector(".final-result");
const rulesContainer = document.querySelector(".rules-container");
const closeWindow = rulesContainer.querySelector(".close-window");
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

const switchViews = () => {
  gameContainer.classList.add("slide-left");
  setTimeout(() => {
    gameContainer.classList.add("hidden");
    playerPickResultContainer.classList.remove("hidden");
    setTimeout(() => {
      playerPickResultContainer.classList.add("hidden");
      compareResultContainer.classList.remove("hidden");
      setTimeout(() => {
        compareResultContainer.classList.add("hidden");
        finalResultContainer.classList.remove("hidden");

        // Aktualizacja wyniku po zakończeniu gry
        updateScore();
      }, 1000);
    }, 1000);
  }, 1000);
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

const openRules = () => {
  rulesContainer.classList.toggle("hidden");
};

closeWindow.addEventListener("click", () => {
  rulesContainer.classList.add("hidden");
});

rulesButton.addEventListener("click", () => {
  openRules();
});

main.addEventListener("click", (event) => {
  const playAgainButton = event.target.closest(".play-again");

  if (playAgainButton) {
    finalResultContainer.classList.add("hidden");
    gameContainer.classList.remove("slide-left");
    gameContainer.classList.remove("hidden");
  }
  updateScore();
});

const initializeGame = () => {
  buttonOperation();
  updateScore();
};

initializeGame();
