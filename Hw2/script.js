let scene = document.querySelector("#selectScene");
let shirt = document.querySelector("#shirtRadio");
let hoodie = document.querySelector("#hoodieRadio");
let jeans = document.querySelector("#jeansRadio");
let skirt = document.querySelector("#skirtRadio");
let beanie = document.querySelector("#beanieRadio");
let headband = document.querySelector("#headbandRadio");
let shoe = document.querySelector("#shoeRadio");
let boot = document.querySelector("#bootRadio");
let sunglasses = document.querySelector("#sunglasses");
let bag = document.querySelector("#bag");
let resetBtn = document.querySelector("#resetBtn");
let shuffleBtn = document.querySelector("#shfflBtn")


scene.addEventListener("change", changeScene);
shirt.addEventListener("change", changeShirt);
hoodie.addEventListener("change", changeShirt);
jeans.addEventListener("change" , changeBottoms);
skirt.addEventListener("change", changeBottoms);
beanie.addEventListener("change", changeHat);
headband.addEventListener("change", changeHat);
shoe.addEventListener("change", changeShoe);
boot.addEventListener("change", changeShoe);
sunglasses.addEventListener("change", addAccessory);
bag.addEventListener("change", addAccessory);
resetBtn.addEventListener("click", resetGame);
shuffleBtn.addEventListener("click", shuffleOutfit);


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

function addAccessory() {
    if(sunglasses.checked) {
        document.querySelector("#accSunglasses").src = "imgs/sunglasses.png";
        document.querySelector("#accSunglasses").style.display = "block";
    }
    else {
        document.querySelector("#accSunglasses").src = "";
        document.querySelector("#accSunglasses").style.display = "none";
    }

    if(bag.checked) {
        document.querySelector("#accBag").src = "imgs/purse.png";
        document.querySelector("#accBag").style.display = "block";
    }
    else {
        document.querySelector("#accBag").src = "";
        document.querySelector("#accBag").style.display = "none";
    }
}

function resetGame() {
    document.querySelector("#preview").style.backgroundImage = "url(imgs/bedroom.jpg)";
    document.querySelector("#shirtImg").src = "imgs/pjShirt.png";
    document.querySelector("#pantsImg").src = "imgs/pjPants.png";
    document.querySelector("#shoesImg").src = "imgs/slippers.png";
    document.querySelector("#hatImg").src = "";
    document.querySelector("#hatImg").style.display = "none";
    document.querySelector("#accSunglasses").src = "";
    document.querySelector("#accSunglasses").style.display = "none";
    document.querySelector("#accBag").src = "";
    document.querySelector("#accBag").style.display = "none";

    scene.value = "null";   
    shirt.checked = false;   
    hoodie.checked = false;
    jeans.checked = false;
    skirt.checked = false;
    beanie.checked = false;
    headband.checked = false;
    shoe.checked = false;
    boot.checked = false;

    sunglasses.checked = false;
}

function shuffleOutfit() {
    let shirtOption = ["imgs/shirt.png", "imgs/hoodie.png"];
    let pantOption = ["imgs/jeans.png", "imgs/skirt.png"];
    let shoesOption = ["imgs/sneakers.png", "imgs/boots.png"];
    let hatOption = ["imgs/beanie.png", "imgs/headband.png"];
    let scenesOption = ["imgs/bedroom.jpg", "imgs/beach.jpg", "imgs/city.jpg", "imgs/forest.jpg"]

    let outfitParts = [shirtOption, pantOption, shoesOption, hatOption, scenesOption];
    for(let i=0; i < outfitParts.length; i++) {
        let part = outfitParts[i];
        let randomIndex = Math.floor(Math.random() * part.length);
        let choice = part[randomIndex];

        if(i == 0){
            document.querySelector("#shirtImg").src = choice;
        }
        else if (i == 1) {
            document.querySelector("#pantsImg").src = choice;
        }
        else if (i == 2){
            document.querySelector("#shoesImg").src = choice;
        }
        else if (i == 3){
            document.querySelector("#hatImg").src = choice;
            document.querySelector("#hatImg").style.display = "block";
        }
        else if (i == 4) {
            document.querySelector("#preview").style.backgroundImage = `url(${choice})`;
        }
    }
}