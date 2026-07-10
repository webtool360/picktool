document.addEventListener("DOMContentLoaded", function() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    const guessBtn = document.getElementById("guess-btn");
    const resultDiv = document.getElementById("result");

    guessBtn.addEventListener("click", function() {
        const userGuess = Number(document.getElementById("guess").value);
        
        if (!userGuess || userGuess < 1 || userGuess > 100) {
            resultDiv.innerHTML = "Please enter a number between 1 and 100.";
            return;
        }

        if (userGuess === randomNumber) {
            resultDiv.innerHTML = "Congratulations! You guessed it right.";
        } else if (userGuess < randomNumber) {
            resultDiv.innerHTML = "Too low! Try a higher number.";
        } else {
            resultDiv.innerHTML = "Too high! Try a lower number.";
        }
    });
});
            
