"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var rectangle_1 = require("./rectangle");
var square = /** @class */ (function (_super) {
    __extends(square, _super);
    function square() {
        return _super.call(this) || this;
    }
    square.prototype.draw = function () { return "inside square class draw function"; };
    ;
    square.prototype.area = function () { return "area of the square " + this.length * this.length; };
    ;
    return square;
}(rectangle_1.rectangle));
exports.square = square;
