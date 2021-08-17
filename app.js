// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
const guessedNumber = document.getElementById('number-input');
const guessButton = document.getElementById('guess-button');
const displayedResult = document.getElementById('result-space');
const guessesLeft = document.getElementById('guess-space');

// initialize global state
let guessCount = 4;

let correctAnswer = Math.ceil(Math.random() * 20);
// set event listeners 
guessButton.addEventListener('click', () => {
  let currentGuess = (Number(guessedNumber.value));
  let result = compareNumbers(currentGuess, correctAnswer);

  if (result === 1) {
    displayedResult.textContent = 'Too high! Guess again.' }
    else if (result === 0) {
    displayedResult.textContent = 'Holy wow, you got it!' }
    else {
    displayedResult.textContent = 'Too low! Guess again.'}

  guessCount--;
  guessesLeft.textContent = guessCount;

  if (guessCount === 0) {
    guessedNumber.disabled = true;
    guessButton.disabled = true;
  }
  console.log(result);
  console.log(correctAnswer);
  console.log(guessCount);
})
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
 