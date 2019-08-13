import {calculate} from './methods'
import {rectangle} from './rectangle'
export class square extends rectangle implements calculate {
    constructor()
   {
        super();
   }
draw():string{return "inside square class draw function"};
area():string {return "area of the square "+this.length*this.length};
}