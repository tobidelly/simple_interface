const cells = document.querySelectorAll("[data-cell]");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("resetButton");
let currentPlayer = "X";
let gameActive = true;
const board = ["", "", "", "", "", "", "", "", ""];

// Winning combinations
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Player's move
function playerMove(cell, index) {
  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add("taken");

  if (checkWinner(currentPlayer)) {
    statusText.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== "")) {
    statusText.textContent = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = "O";
  statusText.textContent = "Computer's turn";
  setTimeout(computerMove, 500);
}

// Simple AI for the computer's move
function computerMove() {
  let availableCells = board
    .map((value, index) => (value === "" ? index : null))
    .filter(index => index !== null);

  if (availableCells.length === 0) return;

  let randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
  board[randomIndex] = currentPlayer;
  cells[randomIndex].textContent = currentPlayer;
  cells[randomIndex].classList.add("taken");

  if (checkWinner(currentPlayer)) {
    statusText.textContent = `Computer (${currentPlayer}) wins!`;
    gameActive = false;
    return;
  }

  currentPlayer = "X";
  statusText.textContent = "Your turn";
}

// Check for a winner
function checkWinner(player) {
  return winningCombos.some(combo =>
    combo.every(index => board[index] === player)
  );
}

// Reset the game
function resetGame() {
  board.fill("");
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("taken");
  });
  currentPlayer = "X";
  statusText.textContent = "Your turn";
  gameActive = true;
}

// Add event listeners
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => playerMove(cell, index));
});

resetButton.addEventListener("click", resetGame);
