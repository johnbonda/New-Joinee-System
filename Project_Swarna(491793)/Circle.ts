import {IShape} from './Shape';

export class Circle implements IShape
{
    Radius:number;
    constructor(pRadius:number)
    {
        this.Radius=pRadius;
    }
    public Draw(): string
    {
        return "Circle Drawing method";
    }
    public Area():number
    {
        return 22*(this.Radius)*(this.Radius)/7;
    }
}

   

