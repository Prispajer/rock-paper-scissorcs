const button = document.querySelectorAll(".button");
const rules = document.querySelector(".rules");
const rulesContainer = document.querySelector(".rules-container");
const main = document.querySelector("main");
const playerChoiceContainer = document.querySelector(
  ".player-choice-container"
);
const computerChoiceContainer = document.querySelector(
  ".computer-choice-container"
);

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

const updatePhase1 = () => {
  const section = document.createElement("section");
  section.classList.add("phase-1");
  main.prepend(section);
};

const updatePhase2 = () => {
  return phase2;
};
const updatePhase3 = () => {
  return phase3;
};
const updatePhase4 = () => {
  return phase4;
};

setTimeout(() => {}, 1000);

button.forEach((active) => {
  active.addEventListener("click", (event) => {
    const computerChoice = getComputerId();
    const playerChoice = getPlayerId(event);
    const result = compareResult(computerChoice, playerChoice);
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

updatePhase1();
