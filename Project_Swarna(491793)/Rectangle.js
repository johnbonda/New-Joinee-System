"use strict";
exports.__esModule = true;
var Rectangle = /** @class */ (function () {
    function Rectangle(pLength, pBreadth) {
        this.Length = pLength;
        this.Breadth = pBreadth;
    }
    Rectangle.prototype.Area = function () {
        return this.Length * this.Breadth;
    };
    Rectangle.prototype.Draw = function () {
        return "Rectangle Drawing method";
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
