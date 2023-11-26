function getComputerId() {
  let computerChoice = Math.floor(Math.random() * choices.length);
  return computerChoice;
}

function getPlayerId(event) {
  let choiceId = parseInt(event.target.dataset.choiceId);
  return choiceId;
}

function compareResult(computerResult, playerResult) {
  if (computerResult != playerResult) {
    console.log("WIN");
  } else {
    console.log("LOSE");
  }
}
