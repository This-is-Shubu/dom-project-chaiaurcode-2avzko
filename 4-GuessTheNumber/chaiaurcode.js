const randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector(".guessField");
const submit = document.querySelector(".guessSubmit");
const prevGuesses = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
	submit.addEventListener("click", (e) => {
		e.preventDefault();
		const guess = parseInt(userInput.value);
		validation(guess);
	});
}

function validation(guess) {
	if (isNaN(guess)) {
		alert("please enter a valid number");
	} else if (guess < 1) {
		alert("please enter a number more than 1");
	} else if (guess > 100) {
		alert("please enter a number less than 100");
	} else {
		prevGuess.push(guess);
		if (numGuess === 11) {
			displayGuess(guess);
			displayMessage(`Game Over: Random number was ${randomNumber}`);
			endGame();
		} else {
			displayGuess(guess);
			checkGuess(guess);
		}
	}
}

function checkGuess(guess) {
	if (guess === randomNumber) {
		displayMessage(`you guessed it right`);
		endGame();
		// newGame();
	} else if (guess < randomNumber) {
		displayMessage(`your guess is tooo low`);
	} else if (guess > randomNumber) {
		displayMessage(`your guess is too high`);
	}
}

function displayGuess(guess) {
	userInput.value = "";
	prevGuesses.innerHTML += `${guess} `;
	numGuess++;
	remainingGuesses.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
	lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
	userInput.value = "";
	userInput.setAttribute("disabled", "");
	p.classList.add("button");
	p.innerHTML = `<h2 id="newGame">Start new Game</h2)`;
	startOver.appendChild(p);

	playGame = false;

	newGame();
}

function newGame() {
	const newGameButton = document.querySelector("#newGame");
	newGameButton.addEventListener("click", function (e) {
		userInput.value = "";
		prevGuess = [];
		numGuess = 1;
		prevGuess.innerHTML = "";
		remainingGuesses.innerHTML = `${11 - numGuess}`;
		userInput.removeAttribute("disabled");
		startOver.removeChild(p);

		playGame = true;
	});
}
