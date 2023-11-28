function getComputerId() {
  const choices = possibleScenarios.map((scenario) => scenario.choice);
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
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

const saveResultToLocalStorage = (result) => {
  const existingResults = JSON.parse(localStorage.getItem("gameResults")) || [];
  existingResults.push(result);
  localStorage.setItem("gameResults", JSON.stringify(existingResults));
};

const getResultsFromLocalStorage = () => {
  const storedResults = JSON.parse(localStorage.getItem("gameResults")) || [];
  return storedResults;
};
