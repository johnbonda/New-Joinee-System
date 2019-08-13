var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(pName, pAge) {
        this.Gender = ["Male", "Female"];
        this.Name = pName;
        this.Age = pAge;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(pName, pAge, pDepartment, pSalary) {
        var _this = _super.call(this, pName, pAge) || this;
        _this.Department = pDepartment;
        _this._salary = pSalary;
        _this.EmployeeId = Employee.count++;
        return _this;
    }
    Employee.prototype.GetEmployeeDetails = function () {
        return this;
    };
    Employee.prototype.GetAge = function () {
        return this.Age;
    };
    Employee.prototype.GetSalary = function () {
        return this._salary;
    };
    Employee.count = 0;
    return Employee;
}(Person));
var emp1 = new Employee("John", 22, "EARSE", 25000);
var person1 = emp1;
console.log("Employee name: " + emp1.Name);
console.log("Person name: " + person1.Name);
console.log("Emp1 salary: " + emp1.GetSalary());
console.log("Person Aadhar: " + person1.Aadhar);
