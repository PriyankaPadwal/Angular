"use strict";
exports.__esModule = true;
var Remote = /** @class */ (function () {
    function Remote() {
    }
    Remote.prototype.turnOn = function () {
        console.log("turn on");
    };
    Remote.prototype.turnOff = function () {
        console.log("turn off");
    };
    Remote.prototype.switchChannel = function () {
        console.log("switch channel");
    };
    return Remote;
}());
exports.Remote = Remote;
