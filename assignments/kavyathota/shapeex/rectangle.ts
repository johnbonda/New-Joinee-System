import {calculate} from './methods'
import {shape} from './shape'
export class rectangle extends shape implements calculate {
    length:number;
    breath:number;
    constructor()
    {
         super(4);
         this.length=5;
         this.breath=6;
    }
draw():string{return "inside reactangle class draw function"};
area():string {return "area of the rectangle "+this.length*this.breath};
}