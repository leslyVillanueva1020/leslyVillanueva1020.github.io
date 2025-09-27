document.querySelector("button").addEventListener("click", gradeQuiz);

displayQ1Options();
displayQ5Options();

function displayQ1Options() {
    let q1Options = ["Phoenix", "New York", "Austin", "Toronto"];

    let shuffledOptions = _.shuffle(q1Options);

    for (let i of shuffledOptions) {
        let inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "q1";
        inputElement.value = i;
        console.log(inputElement);

        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(inputElement);

        document.querySelector("#q1Options").append(labelElement);
    }
}

function displayQ5Options(){
    let q5Options = ["Las Vegas", "Sacramento", "Seattle", "Albany", "Honolulu"]

    for(let i of q5Options) {
        let inputElement = document.createElement("input");
        inputElement.type = "checkbox";
        inputElement.name = "q5";
        inputElement.value = i;
        console.log(inputElement);

        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(inputElement);

        document.querySelector("#q5Options").append(labelElement);
    }
}

function gradeQuiz() {
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    let userAnswer2 = document.querySelector("#popularCapt").value;
    let userAnswer3 = document.querySelector("#textInput").value;
    let userAnswer4 = document.querySelector("#numCapt").value;
    let q5Input = document.querySelectorAll("input[name=q5]");
    let correctAnsw5 = ["Sacramento", "Albany", "Honolulu"];
    let totalScore = 0;
    

    if (userAnswer1 == "Phoenix") {
        let afterQuiz = document.querySelector("#q1Msg");
        afterQuiz.textContent = "Correct";
        afterQuiz.style.color = "green";

        document.querySelector("#q1Img").src = "img/checkmark.png";
        document.querySelector("#q1Img").style.display = "inline";
        totalScore += 20;
    }
    else {
        let afterQuiz = document.querySelector("#q1Msg");
        afterQuiz.textContent = "Incorrect";
        afterQuiz.style.color = "red";
        document.querySelector("#q1Img").src = "img/xmark.png";
        document.querySelector("#q1Img").style.display = "inline";
    }

    if(userAnswer2 == "Washington D.C"){
        let afterQuiz2 = document.querySelector("#q2Msg");
        afterQuiz2.textContent = "Correct";
        afterQuiz2.style.color = "green";

        document.querySelector("#q2Img").src = "img/checkmark.png";
        document.querySelector("#q2Img").style.display = "inline";
        totalScore += 20;
    } else {
        let afterQuiz2 = document.querySelector("#q2Msg");
        afterQuiz2.textContent = "Incorrect";
        afterQuiz2.style.color = "red";

        document.querySelector("#q2Img").src = "img/xmark.png";
        document.querySelector("#q2Img").style.display = "inline";
    }

    if(userAnswer3 == "cheyenne"){
        let afterQuiz3 = document.querySelector("#q3Msg");
        afterQuiz3.textContent = "Correct";
        afterQuiz3.style.color = "green";

        document.querySelector("#q3Img").src = "img/checkmark.png";
        document.querySelector("#q3Img").style.display = "inline";
        totalScore += 20;
    }
    else {
        let afterQuiz3 = document.querySelector("#q3Msg");
        afterQuiz3.textContent = "Incorrect";
        afterQuiz3.style.color = "red";

        document.querySelector("#q3Img").src = "img/xmark.png";
        document.querySelector("#q3Img").style.display = "inline";
    }

    if (userAnswer4 == "51") {
        let afterQuiz4 = document.querySelector("#q4Msg");
        afterQuiz4.textContent = "Correct";
        afterQuiz4.style.color = "green";

        document.querySelector("#q4Img").src = "img/checkmark.png";
        document.querySelector("#q4Img").style.display = "inline";
        totalScore += 20;
    }
    else {
        let afterQuiz4 = document.querySelector("#q4Msg");
        afterQuiz4.textContent = "Incorrect";
        afterQuiz4.style.color = "red";

        document.querySelector("#q4Img").src = "img/xmark.png";
        document.querySelector("#q4Img").style.display = "inline";
    }

    
    let correctCount = 0;
    let wrongChoice = false;

    for(let i of q5Input) {
        if(i.checked){
            if(correctAnsw5.includes(i.value)){
                correctCount++;
            }
            else {
                wrongChoice = true;
            }
        }
    }

    let afterQuiz5 = document.querySelector("#q5Msg");
    if(!wrongChoice && correctCount === correctAnsw5.length) {
        afterQuiz5.textContent = "Correct";
        afterQuiz5.style.color = "green";
        
        document.querySelector("#q5Img").src = "img/checkmark.png";
        document.querySelector("#q5Img").style.display = "inline";
        totalScore += 20;
    } 
    else {
        afterQuiz5.textContent = "Incorrect";
        afterQuiz5.style.color = "red";   
        document.querySelector("#q5Img").src = "img/xmark.png";
        document.querySelector("#q5Img").style.display = "inline";
    }

    let totalScoreDiv = document.querySelector("#totalScore");
    totalScoreDiv.textContent = `Total Score: ${totalScore} / 100`;

    congratsDiv = document.querySelector("#congratsMsg");
    if(totalScore > 80) {
        congratsDiv.textContent = "🎉 Great job! You scored above 80!";
        congratsDiv.style.color = "green";
    }
    else {
        congratsDiv.textContent = "";
    }

    //getting the value saved at local storage key(quiz times taken)
    let times =  localStorage.getItem("quizTimesTaken");

    //if test has not been done before instead of null we want 0 
    if(times == null){
        times = 0;
    }
    else {
        //local storage give back a string so we have to turn it into an int
        times = parseInt(times);
    }

    times += 1;
    localStorage.setItem("quizTimesTaken", times);
    document.querySelector("#timesTaken").textContent = "Times Taken: " + times;

    document.querySelector("#afterSubmit").style.display = "block";
}
