import {IShape} from './Shape';
import {Rectangle} from './Rectangle';
export class Square extends Rectangle implements IShape
{
    constructor(pSide:number)
    {
      super(pSide,pSide);
      this.Side=pSide;
    }
    Side:number;
    public Draw():string{
        return "Square drawn";
    }

}