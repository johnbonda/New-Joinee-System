import {Shape} from './Shape';

export class Circle implements Shape{
    public Radius:number;
    constructor(pRadius:number) {
        this.Radius = pRadius;
    }
    public draw() {
        console.log("Draw a circle with radius: " + this.Radius);
    }
    public area() {
        console.log(22/7*this.Radius*this.Radius);
    }
}