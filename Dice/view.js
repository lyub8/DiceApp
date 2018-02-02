"use strict";

fucntion view() {
    var image  = document.getElementById("dice");
    this.showFace = function (faceNo) {
        image.src = "images/" + faceNo + ".png";
        image.alt = faceNo;
    };
}