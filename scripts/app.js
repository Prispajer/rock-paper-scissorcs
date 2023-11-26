const button = document.querySelectorAll(".button");
const rules = document.querySelector(".rules");
const rulesContainer = document.querySelector(".rules-container");

let choices = ["paper", "scissors", "rock"];

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
