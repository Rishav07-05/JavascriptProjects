let ran = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subm");
const userGuess = document.querySelector("#userGuess");
const leftGuesses = document.querySelector(".leftGuesses");
const lastguess = document.querySelector(".lastguess");
const loworHigh = document.querySelector(".loworHigh");
const guessingPart = document.querySelector(".guessingPart");

const para = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    const guess = parseInt(userGuess.value);
    validGuess(guess);
  });
}

function validGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a valid number");
  } else if (guess > 100) {
    alert("Please enter a valid number");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game Over. Last Number was ${ran}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === ran) {
    displayMsg(`Damn!!! , You guessed it right`);
    endGame();
  } else if (guess < ran) {
    displayMsg(`Number is too low`);
  } else if (guess > ran) {
    displayMsg(`Number is too high`);
  }
}

function displayGuess(guess) {
  userGuess.value = "";
  leftGuesses.innerHTML += `${guess},`;
  numGuess++;
  lastguess.innerHTML = `${11 - numGuess}`;
}

function displayMsg(message) {
  loworHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userGuess.value = "";
  userGuess.setAttribute("disabled", "");
  para.classList.add("button");
  para.innerHTML = `<h2 id="newGame">Try Again</h2>`;
  guessingPart.appendChild(para);
  playGame = false;
  newGame();
}

function newGame() {
  const newe = document.querySelector("#newe");
  newe.addEventListener("click", function (e) {
    ran = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    leftGuesses.innerHTML = "";
    lastguess.innerHTML = `${11 - numGuess} `;
    userGuess.removeAttribute("disabled");
    guessingPart.removeChild(para);
  });
}
