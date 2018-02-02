"use strict";

function model() {
    var value = 1;
    this.randomize = function () {
        value = Math.floor(Math.random()*6) + 1;
    };

    this.getFace = function () {
        return value;
    };
}