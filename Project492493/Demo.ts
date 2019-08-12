import {IShape} from './Shape';
import {Rectangle} from './Rectangle';
import {Square} from './Square';
import {Circle} from './Circle';

var r : IShape= new Rectangle(10,8); 
var s : IShape= new Square(10); 
var c : IShape= new Circle(10); 

console.log(r.Draw());
console.log(r.Area());
console.log(s.Draw());
console.log(s.Area());
console.log(c.Draw());
console.log(c.Area());

/*function drawShape(shapeX:IShape)
{
    shapeX.Draw();
}

drawShape(new Circle());
drawShape(new )
*/