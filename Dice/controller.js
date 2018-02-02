"use strict";

var diceView = new view(), diceModel = new model(), diceController = null;

function controller () {

    this.updateDisplay = function () {
        diceView.showFace(diceModel.getFace());
    };

    this.init = function () {
        diceView.setRandomClickCallBack( function () {
            diceModel.randomize();
            diceController.updateDisplay();
        });
    };
}

diceController = new controller();
window.addEventListener("load", diceController.init);