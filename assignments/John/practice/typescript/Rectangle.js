"use strict";
exports.__esModule = true;
var Rectangle = /** @class */ (function () {
    function Rectangle(pLength, pBreadth) {
        this.Length = pLength;
        this.Breadth = pBreadth;
    }
    Rectangle.prototype.draw = function () {
        console.log("Draw two parallel lines with length: " + this.Length + " and with a distance of: " + this.Breadth + " apart.");
        console.log("Connect the ends.");
    };
    Rectangle.prototype.area = function () {
        console.log(this.Length * this.Breadth);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
