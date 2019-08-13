import {Shape} from './Shape';

export class Rectangle implements Shape {
    public Length: number;
    public Breadth: number;
    constructor(pLength: number, pBreadth: number) {
        this.Length = pLength;
        this.Breadth = pBreadth;
    }
    public draw() {
        console.log("Draw two parallel lines with length: " + this.Length + " and with a distance of: " + this.Breadth + " apart.");
        console.log("Connect the ends.");
    }
    public area() {
        console.log(this.Length * this.Breadth);
    }
}