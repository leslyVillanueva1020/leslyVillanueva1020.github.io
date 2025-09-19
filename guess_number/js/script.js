//Global variables
let randomNumber;
let attempts;
let maxAtmpt;
let wins = 0;
let losses = 0;

initializeGame();

document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);
   attempts = 0;
   maxAtmpt = 7;

   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";

   document.querySelector("#guessBtn").style.display = "inline";
  
   //adding focus to textbox
   document.querySelector("#playerGuess").focus();

   let playerGuess = document.querySelector("#playerGuess");
   playerGuess.focus(); //adding focus to text box
   playerGuess.value = ""; //clearing text box

   let feedback = document.querySelector("#feedback");
   feedback.textContent = ""; //clearing the feedback

   //clearing previous guesses
   document.querySelector("#guesses").textContent = "";

   document.querySelector("#attempts").textContent = maxAtmpt;
   document.querySelector("#wins").textContent = wins;
   document.querySelector("#losses").textContent = losses;

}

function checkGuess() {
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";

    let guess= document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);

    let attemptID = document.querySelector("#attempts");
    let winning = document.querySelector("#wins");
    let losing = document.querySelector("#losses");

    if (guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color= "red";
        return;
    }

    attempts++;
    console.log("Attempts: " + attempts);
    maxAtmpt--;


    feedback.style.color = "orange";

    if(guess == randomNumber){
        feedback.textContent = "You guessed it! You Won!"
        feedback.style.color = "green";
        wins++;
        console.log("Wins: " + wins);
        winning.textContent = wins;

        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";
        if(attempts == 7) {
            feedback.textContent = "Sorry, you lost!";
            feedback.style.color = "red";
            attemptID.style.display = "none";
            losses++;
            console.log("Losses: " + losses);
            losing.textContent = losses;
            
            gameOver();
        }
        else if (guess > randomNumber) {
            feedback.textContent = "Guess was too high.";
            attemptID.textContent = maxAtmpt;
        } 
        else {
            feedback.textContent = "Guess was too low.";
            attemptID.textContent = maxAtmpt;
        }
    }
}

function gameOver() {
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
}