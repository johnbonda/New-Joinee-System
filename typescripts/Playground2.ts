class Greeter {
    public Name: string;
    public Contact: string[];
    public Place: string;
    public Extras: string[];
    constructor(pName:string="", pContact:string[], pPlace?:string, ...pExtras:string[]) {
        this.Name = pName;
        this.Contact = pContact;
        this.Place = pPlace;
        this.Extras = pExtras;
    }

    public printAll() {
        console.log("Name: " + this.Name);
        console.log("Contact: " + this.Contact);
        console.log("Place: " + this.Place);
        console.log("Extras: " + this.Extras);
    }
}

var obj1 = new Greeter("John", ["Hyatt, Gachibowli"]);
obj1.printAll();