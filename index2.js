document.addEventListener("DOMContentLoaded", () => {
    const maxNumberInput = document.getElementById("maxNumber");
    const startGameButton = document.getElementById("startGame");
    const gameArea = document.getElementById("gameArea");
    const guessInput = document.getElementById("guessInput");
    const submitGuessButton = document.getElementById("submitGuess");
    const quitGameButton = document.getElementById("quitGame");
    const hintMessage = document.getElementById("hintMessage");
    const displayMax = document.getElementById("displayMax");

    let maxNumber;
    let randomNumber;
    let gameStarted = false;

    startGameButton.addEventListener("click", () => {
        maxNumber = parseInt(maxNumberInput.value);
        if (isNaN(maxNumber) || maxNumber <= 0) {
            alert("Please enter a valid maximum number.");
            return;
        }

        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        gameArea.classList.remove("hidden");
        displayMax.textContent = maxNumber;
        hintMessage.textContent = "";
        gameStarted = true;
    });

    submitGuessButton.addEventListener("click", () => {
        if (!gameStarted) return;

        const guess = parseInt(guessInput.value);
        if (isNaN(guess)) {
            hintMessage.textContent = "Please enter a valid number.";
            return;
        }

        if (guess === randomNumber) {
            hintMessage.textContent = "You are right! Congrats!";
            hintMessage.style.color = "#4CAF50";
            gameStarted = false;
        } else if (guess < randomNumber) {
            hintMessage.textContent = "Hint: Your guess was too small. Please try again.";
        } else {
            hintMessage.textContent = "Hint: Your guess was too large. Please try again.";
        }
    });

    quitGameButton.addEventListener("click", () => {
        gameStarted = false;
        gameArea.classList.add("hidden");
        maxNumberInput.value = "";
        guessInput.value = "";
        hintMessage.textContent = "User quit.";
        hintMessage.style.color = "#ff5722";
    });
});
