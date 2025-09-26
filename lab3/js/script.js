// document.querySelector("button").addEventListener("click", gradeQuiz);

// displayQ3Options();
// function displayQ3Options() {

//     let q3Options = ["font-color", "fontColor", "color", "text-color"];
//     q3Options = _.shuffle(q3Options);

//     for(let i of q3Options){

//         let inputElement = document.createElement("input");
//         inputElement.type = "radio";
//         inputElement.name = "q3";
//         inputElement.value = i;
//         console.log(inputElement);

//         let labelElement = document.createElement("label");
//         labelElement.textContent = i;
//         labelElement.prepend(inputElement);

//         document.querySelector("#q3Options").append(labelElement);
//     }

// }

// function gradeQuiz() {
//     let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
//     // alert(userAnswer1);

//     if(userAnswer1 == "color") {
//         alert("Right!");
//     } else {
//         alert("Wrong!");
//     }
// }

document.querySelector("button").addEventListener("click", gradeQuiz);

displayQ1Options();
function displayQ1Options() {
    let q1Options = ["Phoenix", "New York", "Austin", "Toronto"];

    for (let i of q1Options) {
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

function gradeQuiz() {
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    let userAnswer2 = document.querySelector("#popularCapt").value;
    let userAnswer3 = document.querySelector("#textInput").value;
    let userAnswer4 = document.querySelector("#numCapt").value;
    
    if (userAnswer1 == "Phoenix") {
        let afterQuiz = document.querySelector("#afterQuiz");
        afterQuiz.textContent = "Correct";
        afterQuiz.style.color = "green";
    }
    else {
        let afterQuiz = document.querySelector("#afterQuiz");
        afterQuiz.textContent = "Incorrect";
        afterQuiz.style.color = "red";
    }

    if(userAnswer2 == "Washington D.C"){
        let afterQuiz2 = document.querySelector("#afterQuiz2");
        afterQuiz2.textContent = "Correct";
        afterQuiz2.style.color = "green";
    } else {
        let afterQuiz2 = document.querySelector("#afterQuiz2");
        afterQuiz2.textContent = "Incorrect";
        afterQuiz2.style.color = "red";
    }

    if(userAnswer3 == "Cheyenne"){
        let afterQuiz3 = document.querySelector("#afterQuiz3");
        afterQuiz3.textContent = "Correct";
        afterQuiz3.style.color = "green";
    }
    else {
        let afterQuiz3 = document.querySelector("#afterQuiz3");
        afterQuiz3.textContent = "Incorrect";
        afterQuiz3.style.color = "red";
    }
    if (userAnswer4 == "51") {
        let afterQuiz4 = document.querySelector("#afterQuiz4");
        afterQuiz4.textContent = "Correct";
        afterQuiz4.style.color = "green";
    }
    else {
        let afterQuiz4 = document.querySelector("#afterQuiz4");
        afterQuiz4.textContent = "Incorrect";
        afterQuiz4.style.color = "red";
    }
}
