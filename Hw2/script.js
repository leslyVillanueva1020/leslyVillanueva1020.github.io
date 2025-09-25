let scene = document.querySelector("#selectScene");

scene.addEventListener("click", changeScene);

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