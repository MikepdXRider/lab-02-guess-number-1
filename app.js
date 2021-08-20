// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
const guessedNumber = document.getElementById('number-input');
const guessButton = document.getElementById('guess-button');
const displayedResult = document.getElementById('result-space');
const guessesLeft = document.getElementById('guess-space');
const playAgain = document.getElementById('playagain-button');

// initialize global state
let guessCount = 4;
let correctGuesses = 0;
let wrongGuesses = 0;


let correctAnswer = Math.ceil(Math.random() * 20);

function disableToPlayAgain() {
  guessedNumber.disabled = true;
  guessButton.disabled = true;
  guessButton.style.color = "gray";
  playAgain.style.visibility = 'visible';
}

// set event listeners 
guessButton.addEventListener('click', () => {
  wrongGuesses++;
  let currentGuess = (Number(guessedNumber.value));
  let result = compareNumbers(currentGuess, correctAnswer);
  console.log(correctAnswer);

  if (result === 0) {
    correctGuesses++;
    displayedResult.textContent =  `Holy wow, you got it! You have guessed correctly ${correctGuesses} time(s).`; 
    disableToPlayAgain();}
    else if (result === 1) {
    displayedResult.textContent = 'Too high!';}
    else {
    displayedResult.textContent = 'Too low!';}

  guessCount--;
  guessesLeft.textContent = guessCount;

  if ((guessCount === 0) && (result !== 0)) {
    displayedResult.textContent = `Aw, you lost to the robot. The robot was thinking of ${correctAnswer}. You have guessed incorrectly ${wrongGuesses} time(s).`;
    disableToPlayAgain();
  }

})

playAgain.addEventListener('click', () => {
  guessedNumber.disabled = false;
  guessButton.disabled = false;
  guessButton.style.color = "yellow";
  playAgain.style.visibility = 'hidden';
  displayedResult.textContent = 'Your result will show here.';
  guessCount = 4;
  guessesLeft.textContent = guessCount;
  correctAnswer = Math.ceil(Math.random() * 20);
})
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
 