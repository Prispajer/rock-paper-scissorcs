const button = document.querySelectorAll(".button");
const rules = document.querySelector(".rules");
const rulesContainer = document.querySelector(".rules-container");

const possibleScenarios = [
  {
    choice: "rock",
    beats: "scissors",
  },
  {
    choice: "scissors",
    beats: "paper",
  },
  {
    choice: "paper",
    beats: "rock",
  },
];

button.forEach((active) => {
  active.addEventListener("click", (event) => {
    const computerChoice = getComputerId();
    const playerChoice = getPlayerId(event);
    const result = compareResult(computerChoice, playerChoice);
    console.log(playerChoice);
    console.log(computerChoice);
    saveResultToLocalStorage(result);
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
