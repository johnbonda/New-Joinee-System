"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle(pRadius) {
        this.Radius = pRadius;
    }
    Circle.prototype.Draw = function () {
        return "Circle Drawn";
    };
    Circle.prototype.Area = function () {
        return 22 * (this.Radius) * (this.Radius) / 7;
    };
    return Circle;
}());
exports.Circle = Circle;
