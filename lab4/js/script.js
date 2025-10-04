let state2L;

//Event Listeners
document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#state").addEventListener("change", updateVal);
document.querySelector("#username").addEventListener("input", availableName); //input updates as they type
document.querySelector("#pass").addEventListener("click", passMsg);
document.querySelector("#signupForm").addEventListener("submit", validateForm);

displayStates();

async function displayCity() {
    let zipCode = document.querySelector("#zip").value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);

            if(data.city){ //valid response
                document.querySelector("#city").textContent = data.city;
                document.querySelector("#lat").textContent = data.latitude;
                document.querySelector("#longit").textContent = data.longitude;
                document.querySelector("#errMsg").textContent = "";
            }
            else{
                document.querySelector("#errMsg").textContent = "Zip code not found!";
                document.querySelector("#errMsg").style.color = "red";
                document.querySelector("#city").textContent = "";
                document.querySelector("#lat").textContent = "";
                document.querySelector("#longit").textContent = "";
            }

        } catch (parseError) {
            console.log("JSON Parsing error " + parseError);
        }
    } catch (error) {
        console.log("Network error " + error);
    }
    //alert(zipCode)
}


async function displayStates() {
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);

            for (let i of data) {
                let optionElement = document.createElement("option");
                optionElement.textContent = i.state;
                optionElement.value = i.usps;

                document.querySelector("#state").append(optionElement);
            }

        } catch (parseError) {
            console.log("JSON Parsing error " + parseError);
        }
    } catch (error) {
        console.log("Network error " + error);
    }
    //alert(zipCode)
}

function updateVal(){
    state2L = document.querySelector("#state").value;
    console.log("Selected state: " + state2L);
    displayCounties(state2L);
}

async function displayCounties(stateAbbr) {
    let url = "https://csumb.space/api/countyListAPI.php?state=" + stateAbbr;
    try{
        let response = await fetch(url);

        try{
            let data = await response.json();
            console.log(data);

            let countySelect = document.querySelector("#county");
            countySelect.innerHTML = "";

            for(let county of data){
                let optionElement = document.createElement("option");
                optionElement.textContent = county.county;

               countySelect.append(optionElement);
            }


        } catch(parseError){
            console.log("JSON Parsing error " + parseError);
        }
    } catch (error){
        console.log("Network error " + error);
    }
}

async function availableName() {
    let username = document.querySelector("#username").value.trim();
    let userMsg = document.querySelector("#nameMsg");

    let url = "https://csumb.space/api/usernamesAPI.php?username=" + username;

    try{
        let response = await fetch(url);
        try{
            let data = await response.json();
            console.log("availabeName Data: ");
            console.log(data);

            if(data.available){
                userMsg.textContent = "Username is available✅";
                userMsg.style.color = "green";
            }
            else {
                userMsg.textContent = "Sorry, that username is taken❌";
                userMsg.style.color = "red";
            }

        } catch(parseError){
            console.log("JSON Parsing error " + parseError);
        }
    } catch(error) {
        console.log("Network error " + error);
    }
}

async function passMsg(){
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";

    try{
        let response = await fetch(url);

        try{
            let data = await response.json();
            console.log(data);

            document.querySelector("#passMsg").textContent = "Suggested Password: " + data.password;
            document.querySelector("#passMsg").style.color = "green";

        } catch(parseError){
            console.log("JSON Parsing error " + parseError);
        }

    } catch(error) {
        console.log("Network error " + error);
    }
}

function validateForm(e){
    let isValid = true;
    
    let username = document.querySelector("#username").value.trim();
    let pass = document.querySelector("#pass").value;
    let pass2 = document.querySelector("#pass2").value;


    let validMsg = document.querySelector("#nameValidate");
    if(username.length < 3){
        validMsg.textContent = "At least 3 characters needed.";
        validMsg.style.color = "red";
        isValid = false;
    }
    else{
        validMsg.textContent = "";
    }

    let passMsg = document.querySelector("#passValidate");
    if(pass.length < 6){
        passMsg.textContent = "Password must be at least 6 characters."
        passMsg.style.color = "red";
        isValid = false;
    }
    else {
        passMsg.textContent = "";
    }

    let equalPassMsg = document.querySelector("#pass2Validate");
    if(pass != pass2){
        equalPassMsg.textContent = "Retype Password. Passwords don't match.";
        equalPassMsg.style.color = "red";
        isValid = false;
    }
    else{
        equalPassMsg.textContent = "";
    }

    if(!isValid) e.preventDefault();
}