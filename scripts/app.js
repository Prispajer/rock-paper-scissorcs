const button = document.querySelectorAll(".button");

let choices = ["paper", "scissors", "rock"];

function getComputerId() {
  let computerChoice = Math.floor(Math.random() * choices.length);
  console.log(computerChoice);
}

function getPlayerId(event) {
  let choiceId = parseInt(event.target.dataset.choiceId);

  console.log(choiceId);
}

function compareResult() {}

button.forEach((active) => {
  active.addEventListener("click", (event) => {
    getPlayerId(event);
    getComputerId();
  });
});
