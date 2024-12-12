const board = document.getElementById("board");
const rollButton = document.getElementById("rollButton");
const resetButton = document.getElementById("resetButton");
const diceResult = document.getElementById("diceResult");
const statusText = document.getElementById("status");

// Board size and token positions
const boardSize = 100;
let playerPosition = 0;
let computerPosition = 0;

// Initialize the game board
function createBoard() {
  board.innerHTML = "";
  for (let i = 0; i < boardSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `cell-${i}`;
    cell.textContent = i + 1;
    board.appendChild(cell);
  }
}

// Update the positions on the board
function updateBoard() {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.classList.remove("player", "computer");
  });

  document.getElementById(`cell-${playerPosition}`).classList.add("player");
  document.getElementById(`cell-${computerPosition}`).classList.add("computer");
}

// Roll the dice
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Handle player turn
function playerTurn() {
  const roll = rollDice();
  diceResult.textContent = `🎲 ${roll}`;
  statusText.textContent = `You rolled a ${roll}!`;

  playerPosition += roll;
  if (playerPosition >= boardSize - 1) {
    playerPosition = boardSize - 1;
    updateBoard();
    statusText.textContent = "You win! 🎉";
    rollButton.disabled = true;
    return;
  }

  updateBoard();
  setTimeout(computerTurn, 1000);
}

// Handle computer turn
function computerTurn() {
  const roll = rollDice();
  statusText.textContent = `Computer rolled a ${roll}!`;

  computerPosition += roll;
  if (computerPosition >= boardSize - 1) {
    computerPosition = boardSize - 1;
    updateBoard();
    statusText.textContent = "Computer wins! 🤖";
    rollButton.disabled = true;
    return;
  }

  updateBoard();
  statusText.textContent = "Your turn!";
}

// Reset the game
function resetGame() {
  playerPosition = 0;
  computerPosition = 0;
  rollButton.disabled = false;
  statusText.textContent = "Click 'Roll Dice' to start";
  diceResult.textContent = "🎲";
  createBoard();
  updateBoard();
}

// Initialize event listeners
rollButton.addEventListener("click", playerTurn);
resetButton.addEventListener("click", resetGame);

// Initialize the game on load
createBoard();
updateBoard();
