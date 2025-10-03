let state2L;

//Event Listeners
document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#state").addEventListener("change", updateVal);

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