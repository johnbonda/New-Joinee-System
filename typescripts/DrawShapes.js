"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Square_1 = require("./Square");
var circle = new Circle_1.Circle(5);
var rectangle = new Rectangle_1.Rectangle(10, 2);
var square = new Square_1.Square(3);
var testing = new Circle_1.Circle(6);
testing.draw();
var testing2 = new Rectangle_1.Rectangle(5, 5);
testing2.draw();
// circle.draw();
// rectangle.draw();
// square.draw();
// circle.area();
// rectangle.area();
// square.area();
function drawAllShapes(shapeToDraw) {
    shapeToDraw.draw();
}
