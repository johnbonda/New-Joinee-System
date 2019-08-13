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
var shape_1 = require("./shape");
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle() {
        var _this = _super.call(this, 4) || this;
        _this.length = 5;
        _this.breath = 6;
        return _this;
    }
    rectangle.prototype.draw = function () { return "inside reactangle class draw function"; };
    ;
    rectangle.prototype.area = function () { return "area of the rectangle " + this.length * this.breath; };
    ;
    return rectangle;
}(shape_1.shape));
exports.rectangle = rectangle;
