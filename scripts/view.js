const gameViewTemplate = (playerPick, computerPick, result) => {
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

  const compareResultTemplate = `
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
      <div class="${computerPick}-complete">
      <div class="image-container">
        <img src="images/icon-${computerPick}.svg" alt="${computerPick}" />
      </div>
      </div>
    </div>
  </div>
  `;

  const finalResultTemplate = `
  <div class="picks-container">
    <div class="choice-container">
      <p>YOU PICKED</p>
      <div class="${playerPick}-complete">
      <div class="image-container">
        <img src="images/icon-${playerPick}.svg" alt="${playerPick}" />
      </div>
      </div>
    </div>
    <div class="result">
      <p class="result-text">${result}</p>
      <button class="play-again"><p>PLAY AGAIN</p></button>
    </div>
    <div class="choice-container">
      <p>THE HOUSE PICKED</p>
      <div class="${computerPick}-complete">
      <div class="image-container">
        <img src="images/icon-${computerPick}.svg" alt="${computerPick}" />
      </div>
      </div>
  </div>
`;

  compareResultContainer.innerHTML = compareResultTemplate;
  playerPickResultContainer.innerHTML = playerPickResultTemplate;
  finalResultContainer.innerHTML = finalResultTemplate;
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
      }, 1000);
    }, 1000);
  }, 1000);
};

const updateGameView = () => {
  let playerPick = stateOfTheGame[0].playerPick;
  let computerPick = stateOfTheGame[0].computerPick;
  let result = compareResult();
  gameViewTemplate(playerPick, computerPick, result);
};
