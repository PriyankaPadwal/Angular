"use strict";
exports.__esModule = true;
var remote_1 = require("./remote");
var TV = /** @class */ (function () {
    function TV() {
        this.remote = new remote_1.Remote();
    }
    return TV;
}());
exports.TV = TV;
var tv = new TV();
tv.remote.turnOn();
