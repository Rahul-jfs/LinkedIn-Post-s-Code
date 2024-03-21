let won = 0,
  tie = 0;
lose = 0;
function play(playerChoice) {
  // Array of possible choices

  const choices = ["rock", "paper", "scissors"];

  // Randomly choose a move for the computer
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determine the winner
  let result;
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
    tie++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    won++;
  } else {
    result = "Computer wins!";
    lose++;
  }

  // Display the result
  document.getElementById(
    "result"
  ).innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result} `;
  document.querySelector(
    "#score"
  ).innerText = `Won: ${won}  Lose: ${lose} Tie: ${tie}`;
}
