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
var Rectangle_1 = require("./Rectangle");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(pSide) {
        var _this = _super.call(this, pSide, pSide) || this;
        _this.Side = pSide;
        return _this;
    }
    Square.prototype.Draw = function () {
        return "Square drawing method";
    };
    return Square;
}(Rectangle_1.Rectangle));
exports.Square = Square;
