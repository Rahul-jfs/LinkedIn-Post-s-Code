// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get elements
const guessField = document.getElementById("guessField");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");

// Counter for attempts
let attempts = 0;

// Function to handle the guess
function checkGuess() {
  const userGuess = parseInt(guessField.value);
  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`;
    message.style.color = "green";
    guessButton.disabled = true;
    guessField.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "Try a higher number.";
    message.style.color = "red";
  } else {
    message.textContent = "Try a lower number.";
    message.style.color = "red";
  }

  guessField.value = "";
  guessField.focus();
}

// Event listener for the guess button
guessButton.addEventListener("click", checkGuess);
