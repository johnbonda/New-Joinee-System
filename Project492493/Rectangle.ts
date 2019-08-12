import {IShape} from './Shape';
export class Rectangle implements IShape
{
    Length:number;
    Breadth:number;
    constructor(pLength:number,pBreadth:number)
    {
        this.Length=pLength;
        this.Breadth=pBreadth;
    }
    public Area(): number{
        return this.Length*this.Breadth;
    }
    public Draw():string{
        return "Rectangle Drawn";
    }
}