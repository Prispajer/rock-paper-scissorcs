function getComputerId() {
  const choices = ["paper", "scissors", "rock"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  console.log(choices[randomIndex]);
  return choices[randomIndex];
}

function getPlayerId(event) {
  let choiceId = event.target.dataset.choiceId;
  console.log(choiceId);
  return choiceId;
}

function compareResult(computerResult, playerResult) {
  if (computerResult != playerResult) {
    console.log("WIN");
  } else if (computerResult === playerResult) {
    console.log("DRAW");
  } else {
    console.log("LOSE");
  }
}
