const rulesView = `
<div class="rules-content">
  <div class="rules-header">
    <h2 class="rules-title">RULES</h2>
    <button class="close-window">
     <img src="images/icon-close.svg" alt="" />
    </button>
     </div>
    <div class="rules-main-image">
    <img src="images/image-rules.svg" alt="" />
  </div>
</div>
`;

const rockView = `
<div class="rock-complete">
  <div class="image-container">
    <img src="images/icon-rock.svg" alt="rock" />
  </div>
</div>
`;

const paperView = `
<div class="paper-complete">
  <div class="image-container">
    <img src="images/icon-paper.svg" alt="scissors" />
  </div>
</div>
`;

const scissorsView = `
<div class="scissors-complete">
  div class="image-container">
    <img src="images/icon-scissors.svg" alt="scissors" />
  </div>
</div>
`;

const phase2 = `
<section class="phase-2">
  <div class="picks-container">
    <div class="player-choice-container">
      <p>YOU PICKED</p>
    </div>
    <div class="computer-choice-container">
      <p>THE HOUSE PICKED</p>
      <div class="computer-choice-button">
        <div class="empty"></div>
      </div>
    </div>
  </div>
</section>
`;

const phase3 = `
<section class="phase-3">
  <div class="picks-container">
    <div class="player-choice-container">
        <p>YOU PICKED</p>
    </div>
    <div class="computer-choice-container">
        <p>THE HOUSE PICKED</p>
    </div>
  </div>
</section>

`;

const phase4 = `
<section class="phase-4">
  <div class="picks-container">
    <div class="player-choice-container">
        <p>YOU PICKED</p>
    </div>
    <div class="result">
        <p>YOU LOSE</p>
        <button class="play-again"><p>PLAY AGAIN</p></button>
    </div>
    <div class="computer-choice-container">
        <p>THE HOUSE PICKED</p>
    </div>
  </div>
</section>
`;
