"use strict";

function view() {
    var image  = document.getElementById("dice");
    var randomBtn = document.getElementById("rndB");
    this.showFace = function (faceNo) {
        image.src = "images/" + faceNo + ".png";
        image.alt = faceNo;
    };

    this.setRandomClickCallBack = function (callback) {
        randomBtn.addEventListener("click", callback);
    };
}