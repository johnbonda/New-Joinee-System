export class shape{
    numberofsides:number;
    constructor(int:number)
    {
        if (int==0)
        console.log("its a circle");
        else if(int==4)
        console.log("its a quadrilateral");
    }
}