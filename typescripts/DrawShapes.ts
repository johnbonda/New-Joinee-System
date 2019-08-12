import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";

var circle:Shape = new Circle(5);
var rectangle:Shape = new Rectangle(10, 2);
var square:Shape = new Square(3);

var testing:Shape = <Shape>new Circle(6);
testing.draw();

var testing2:Square =  new Rectangle(5,5);
testing2.draw();

// circle.draw();
// rectangle.draw();
// square.draw();
// circle.area();
// rectangle.area();
// square.area();

function drawAllShapes(shapeToDraw: Shape) {
    shapeToDraw.draw();
}