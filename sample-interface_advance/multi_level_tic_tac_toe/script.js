const cells = document.querySelectorAll("[data-cell]");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("resetButton");
const levelInput = document.getElementById("level");
let currentPlayer = "X";
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];

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

// Computer's move based on difficulty level
function computerMove() {
  const level = parseInt(levelInput.value);
  let moveIndex;

  if (level === 1) {
    moveIndex = randomMove();
  } else if (level <= 5) {
    moveIndex = randomMove() || findWinningMove("O") || findWinningMove("X");
  } else {
    moveIndex = findWinningMove("O") || findWinningMove("X") || randomMove();
  }

  if (moveIndex === undefined) return;

  board[moveIndex] = currentPlayer;
  cells[moveIndex].textContent = currentPlayer;
  cells[moveIndex].classList.add("taken");

  if (checkWinner(currentPlayer)) {
    statusText.textContent = `Computer (${currentPlayer}) wins!`;
    gameActive = false;
    return;
  }

  currentPlayer = "X";
  statusText.textContent = "Your turn";
}

// Find a random available move
function randomMove() {
  const availableCells = board
    .map((value, index) => (value === "" ? index : null))
    .filter(index => index !== null);
  return availableCells.length > 0
    ? availableCells[Math.floor(Math.random() * availableCells.length)]
    : undefined;
}

// Find a winning move
function findWinningMove(player) {
  for (let combo of winningCombos) {
    let [a, b, c] = combo;
    if (board[a] === player && board[b] === player && board[c] === "") return c;
    if (board[a] === player && board[c] === player && board[b] === "") return b;
    if (board[b] === player && board[c] === player && board[a] === "") return a;
  }
  return undefined;
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
