const button = document.querySelectorAll(".button");
const rules = document.querySelector(".rules");
const rulesContainer = document.querySelector(".rules-container");
const main = document.querySelector("main");

let stateOfTheGame = [
  {
    computerWins: localStorage.getItem("computerWins") || 0,
    playerWins: localStorage.getItem("playerWins") || 0,
    computerPick: null,
    playerPick: null,
  },
];

const storePlayerPick = (playerPick) => {
  stateOfTheGame = [
    {
      ...stateOfTheGame[0],
      playerPick: playerPick,
    },
  ];
};

const storeComputerPick = (computerPick) => {
  stateOfTheGame = [
    {
      ...stateOfTheGame[0],
      computerPick: computerPick,
    },
  ];
};

const addPlayerScore = () => {
  localStorage.setItem("playerWins", (stateOfTheGame[0].playerWins += 1));
};

const addComputerScore = () => {
  stateOfTheGame[0].computerWins += 1;
};

const updateScore = () => {
  const scoreElement = document.querySelector(".score-number");
  scoreElement.innerHTML =
    stateOfTheGame[0].playerWins - stateOfTheGame[0].computerWins;
};

const openRules = () => {
  rulesContainer.innerHTML = rulesView;
  const closeWindow = rulesContainer.querySelector(".close-window");
  closeWindow.addEventListener("click", () => {
    rulesContainer.innerHTML = "";
  });
};

const switchViews = () => {
  document.querySelector(".game-container").classList.add("hidden");
  document.querySelector(".player-pick-result").classList.remove("hidden");
};

const updateGameView = () => {
  const playerPickResultContainer = document.querySelector(
    ".player-pick-result"
  );

  let playerPick = stateOfTheGame[0].playerPick;
  let computerPick = stateOfTheGame[0].computerPick;

  const playerPickResultTemplate = `
    <div class="picks-container">
      <div class="choice-container">
        <p>YOU PICKED</p>
        <div class="${playerPick}-complete">
          <div class="image-container">
            <img src="images/icon-${playerPick}.svg" alt="${playerPick}" />
          </div>
        </div>
      </div>
      <div class="choice-container">
        <p>THE HOUSE PICKED</p>
        <div class="empty-button">
          <img src="images/icon-${computerPick}.svg" alt="${computerPick}" />
        </div>
      </div>
    </div>
  `;

  playerPickResultContainer.innerHTML = playerPickResultTemplate;
};

const buttonOperation = () => {
  button.forEach((button) => {
    button.addEventListener("click", (event) => {
      const computerChoice = getComputerId();
      const playerChoice = getPlayerId(event);
      storeComputerPick(computerChoice);
      storePlayerPick(playerChoice);
      switchViews();
      updateGameView();
    });
  });
};

const initializeGame = () => {
  updateScore();
  buttonOperation();
  updateGameView();
};

initializeGame();

rules.addEventListener("click", () => {
  openRules();
});
