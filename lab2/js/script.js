document.querySelector("#guessBtn").addEventListener("click", guess)
let randomNumber = Math.floor(Math.random() * 99) + 1;
let attempts = 0;
let wins = 0;
let losses = 0;

console.log("random number: " + randomNumber);

function guess() {
    let userGuess = document.querySelector("#guessBox").value;
    //alert(userGuess);
    //document.querySelector("#answers").textContent += userGuess + ", ";
    document.querySelector("#answers").textContent += ` ${userGuess} `;
    if (userGuess < randomNumber) {
        document.querySelector("#high_and_low").textContent = "Your guess was too low.";
        document.querySelector("#color_msg").textContent = "WRONG!";
        document.querySelector("#color_msg").style.color = "red";
        attempts += 1;
        document.querySelector("#attempts").textContent = ` ${attempts}, `;
    }
    else if (userGuess > randomNumber) {
        document.querySelector("#high_and_low").textContent = "Your guess was too high.";
        document.querySelector("#color_msg").textContent = "WRONG!";
        document.querySelector("#color_msg").style.color = "red";
        attempts += 1;
        document.querySelector("#attempts").textContent = ` ${attempts}, `;
    }
    else {
        document.querySelector("#color_msg").style.color = "green";
        document.querySelector("#color_msg").textContent = "CORRECT!";
        document.querySelector("#high_and_low").style.display = "none";
        attempts += 1;
        document.querySelector("#attempts").textContent = ` ${attempts} `;
        if (attempts <= 7) {
            document.querySelector("#congrats").textContent = "CONGRATULATIONS! You guessed it under 7 attempts!";
        }
    }
}