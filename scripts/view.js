const updateGameView = (playerPick, computerPick, result) => {
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
      <p>${result}</p>
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
