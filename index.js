const MIN = 1;
const MAX = 6;

const rollBtn = document.getElementById("roll-btn");
const diceRolls = document.querySelectorAll(".dice-roll");

function rollDice() {
  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}

function updateDiceResults() {
  diceRolls.forEach((diceRoll) => {
    const randomNum = rollDice();
    diceRoll.textContent = randomNum; 
  });
}

rollBtn.addEventListener("click", updateDiceResults);
