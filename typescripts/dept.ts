class Dept {

    private deptID: number;
    private deptName: string;
    private ext: number;
    private deptPres:string;
    private allemps: number[];

    constructor(deptID: number, deptName: string,ext: number) {
        this.deptID = deptID;
        this.deptName = deptName;
        this.ext = ext;
    }
    // Methods
    // Getters
    public getdeptID():number{
        return this.deptID;
    }
    public getdeptName():string{
        return this.deptName;
    }
    public getExt():number{
        return this.ext;
    }
  
    // Setters
    public addEmp(newEmp, key): boolean {
        var authorized: boolean = this.authentication(key);
        if(authorized)
            this.allemps.push(newEmp);
        return authorized;
    }
    // Funcitonailites

    // Abstracted Functions
    private authentication(key): boolean {
        return key === "secretKey";
    }
}

var dept1 = new Dept(1,"Technology",304);
var dept2 = new Dept(2, "Accounts",301);

console.log(dept1.getdeptID());

var response = dept1.addEmp(89879,"secretKey");
if(response) {
    console.log("Updated successfully");
} else {
    console.log("Authentication failed");
}

console.log(dept1.getExt());