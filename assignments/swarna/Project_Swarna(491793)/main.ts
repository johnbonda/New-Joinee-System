import {IShape} from './Shape';
import {Rectangle} from './Rectangle';
import {Square} from './Square';
import {Circle} from './Circle';

var rect : IShape= new Rectangle(6,4); 
var sq : IShape= new Square(8); 
var cir : IShape= new Circle(8); 

console.log(rect.Draw());
console.log(rect.Area());
console.log(sq.Draw());
console.log(sq.Area());
console.log(cir.Draw());
console.log(cir.Area());
