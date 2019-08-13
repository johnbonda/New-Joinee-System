import {IActivity} from './Playground-caller';

export class Person implements IActivity {
    constructor(pName:string, pAge:number) {
        this.Name = pName;
        this.Age = pAge;
    }
    Name: string;
    protected Age: number;
    Gender: any[] = ["Male", "Female"];
    Aadhar: string;

    public Walk(): string {
        return "Walking...";
    };
    public Talk = () => "Talking...";
}

export class Employee extends Person {
    constructor(pName: string, pAge:number, pDepartment:string, pSalary:number) {
        super(pName, pAge);
        this.Department = pDepartment;
        this._salary = pSalary;
        this.EmployeeId = Employee.count++;
    }
    static count: number = 0;
    EmployeeId: number;
    Department: string;
    private _salary: number;
    
    GetEmployeeDetails() {
        return this;
    }

    GetAge() {
        return this.Age;
    }

    GetSalary() {
        return this._salary;
    }
}

var emp1: Employee = new Employee("John", 22, "EARSE", 25000);
var person1: Person = emp1;
console.log("Employee name: " + emp1.Name);
console.log("Person name: " + person1.Name);
console.log("Emp1 salary: " + emp1.GetSalary());