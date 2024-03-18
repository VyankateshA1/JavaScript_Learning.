let random = Math.floor(Math.random() * 100 + 1);
const submitBtn = document.querySelector("#submit");
const userInput = document.querySelector(".guessInput");
const guessSlot = document.querySelector(".guess");
const resultLast = document.querySelector(".lastResult");
const lowhi = document.querySelector(".lowHi");
const result = document.querySelector(".result");

const p = document.createElement("p");

let previousGuess = [];
let numerOfGuesses = 1;
let playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validGuess(guess);
  });
}

function validGuess(guess) {
  //
  if (isNaN(guess)) {
    alert("Please Enter Valid Number!");
  } else if (guess < 1 || guess > 100) {
    alert("Please Enter Number Between (1-100)");
  } else {
    previousGuess.push(guess);
    if (numerOfGuesses === 11) {
      displayGuess(guess);
      displayMsg("Game Over ");
      endGame();
    } else {
      displayGuess(guess);
      chekGuess(guess);
    }
  }
}

function chekGuess(guess) {
  //
  if (guess == random) {
    displayMsg("You Guessed is Right...");
    endGame();
  } else if (guess < random) {
    displayMsg("Number is Too low");
  } else if (guess > random) {
    displayMsg("Number is Too High.");
  }
  console.log(`Random:,${random}`);
}

function displayGuess(guess) {
  //
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numerOfGuesses++;
  resultLast.innerHTML = `${11 - numerOfGuesses}`;
}

function displayMsg(msg) {
  //

  lowhi.innerHTML = `<h2>${msg}</h2>`;
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function (e) {
    random = Math.floor(Math.random() * 100 + 1);
    previousGuess = [];
    numerOfGuesses = 1;
    guessSlot.innerHTML = "";
    resultLast.innerHTML = `${11 - numerOfGuesses}`;
    userInput.removeAttribute("disabled");
    result.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start Again</h2>`;
  result.appendChild(p);
  playGame = false;
  newGame();
}
