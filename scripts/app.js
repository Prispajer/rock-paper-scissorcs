const button = document.querySelectorAll(".button");
const rules = document.querySelector(".rules");
const rulesContainer = document.querySelector(".rules-container");
const main = document.querySelector("main");

let stateOfTheGame = [
  {
    computerWins: localStorage.getItem("computerWins") || 0,
    playerWins: localStorage.getItem("playerWins") || 0,
    computerResult: null,
    playerResult: null,
  },
];

const updateScore = () => {
  const scoreElement = document.querySelector(".score-number");
  scoreElement.innerHTML =
    stateOfTheGame[0].playerWins - stateOfTheGame[0].computerWins;
};

setTimeout(() => {}, 1000);

button.forEach((active) => {
  active.addEventListener("click", (event) => {
    const computerChoice = getComputerId();
    const playerChoice = getPlayerId(event);

    compareResult(computerChoice, playerChoice);
  });
});

const updateRulesView = () => {
  rulesContainer.innerHTML = rulesView;
  const closeWindow = rulesContainer.querySelector(".close-window");
  closeWindow.addEventListener("click", () => {
    rulesContainer.innerHTML = "";
  });
};

rules.addEventListener("click", () => {
  updateRulesView();
});

updateScore();
