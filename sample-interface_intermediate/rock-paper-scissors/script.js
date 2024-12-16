// Select buttons and result elements
const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.querySelector('#user-choice span');
const computerChoiceDisplay = document.querySelector('#computer-choice span');
const winnerDisplay = document.getElementById('winner');
const resetButton = document.getElementById('reset');

// Choices array for the computer
const options = ['rock', 'paper', 'scissors'];

// Function to generate a random computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  }

  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win! 🎉';
  } else {
    return 'Computer wins! 💻';
  }
}

// Add click event listeners to each choice button
choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.id;
    const computerChoice = getComputerChoice();

    // Display the choices
    userChoiceDisplay.textContent = userChoice;
    computerChoiceDisplay.textContent = computerChoice;

    // Display the winner
    const result = determineWinner(userChoice, computerChoice);
    winnerDisplay.textContent = result;
  });
});

// Reset button to play again
resetButton.addEventListener('click', () => {
  userChoiceDisplay.textContent = '';
  computerChoiceDisplay.textContent = '';
  winnerDisplay.textContent = '';
});
