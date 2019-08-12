import {calculate} from './methods'
import {shape} from './shape'
export class circle extends shape implements calculate {
   radius:number;
    constructor()
   {
        super(0);
        this.radius=5;
   }
draw():string{return "inside circle class draw function"};
area():string {return "area of the circle "+2*3.14*this.radius};
}