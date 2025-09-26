let scene = document.querySelector("#selectScene");
let shirt = document.querySelector("#shirtRadio");
let hoodie = document.querySelector("#hoodieRadio");
let jeans = document.querySelector("#jeansRadio");
let skirt = document.querySelector("#skirtRadio");
let beanie = document.querySelector("#beanieRadio");
let headband = document.querySelector("#headbandRadio");
let shoe = document.querySelector("#shoeRadio");
let boot = document.querySelector("#bootRadio");


scene.addEventListener("change", changeScene);
shirt.addEventListener("change", changeShirt);
hoodie.addEventListener("change", changeShirt);
jeans.addEventListener("change" , changeBottoms);
skirt.addEventListener("change", changeBottoms);
beanie.addEventListener("change", changeHat);
headband.addEventListener("change", changeHat);
shoe.addEventListener("change", changeShoe);
boot.addEventListener("change", changeShoe);


function changeScene() {

    let previewBckgnd = document.querySelector("#preview");
    if (scene.value == 1){
        previewBckgnd.style.backgroundImage = "url(imgs/beach.jpg)";
    }
    else if(scene.value == 2) {
        previewBckgnd.style.backgroundImage = "url(imgs/city.jpg)";
    }
    else if(scene.value == 3) {
        previewBckgnd.style.backgroundImage = "url(imgs/forest.jpg)";
    }
    else {
        previewBckgnd.style.backgroundImage = "url(imgs/bedroom.jpg)";
    }
}

function changeShirt() {
    let shirtType = document.querySelector("input[name=shirt]:checked").value;
    let shirtImg = document.querySelector("#shirtImg");

    if(shirtType == "shirt"){
        shirtImg.src = "imgs/shirt.png";
    }
    else if(shirtType == "hoodie"){
        shirtImg.src = "imgs/hoodie.png";
    }
}

function changeBottoms() {
    let bottomType = document.querySelector("input[name=pants]:checked").value;
    let pantsImg = document.querySelector("#pantsImg");

    if(bottomType == "jeans"){
        pantsImg.src = "imgs/jeans.png";
    } 
    else if (bottomType == "skirt") {
        pantsImg.src = "imgs/skirt.png";
    }
}

function changeHat() {
    let hatType = document.querySelector("input[name=hat]:checked").value;
    let hatImg = document.querySelector("#hatImg");

    if(hatType == "beanie"){
        hatImg.src = "imgs/beanie.png";
        hatImg.style.display = "block";
    }
    else if(hatType == "headBand") {
        hatImg.src = "imgs/headband.png";
        hatImg.style.display = "block";
    }
}

function changeShoe(){
    let shoeType = document.querySelector("input[name=shoe]:checked").value;
    let shoesImg = document.querySelector("#shoesImg");

    if(shoeType == "sneaker"){
        shoesImg.src = "imgs/sneakers.png";
    }
    else if(shoeType == "boots") {
        shoesImg.src = "imgs/boots.png";
    }

    if(document.querySelector("#pantsImg").src != "imgs/pjPants.png"){
        shoesImg.style.zIndex = 3;
    }
}