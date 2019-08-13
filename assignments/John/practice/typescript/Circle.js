"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle(pRadius) {
        this.Radius = pRadius;
    }
    Circle.prototype.draw = function () {
        console.log("Draw a circle with radius: " + this.Radius);
    };
    Circle.prototype.area = function () {
        console.log(22 / 7 * this.Radius * this.Radius);
    };
    return Circle;
}());
exports.Circle = Circle;
