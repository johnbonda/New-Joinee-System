var Trainer = /** @class */ (function () {
    function Trainer(trainerID, name, course, govtidno, yearOfCareer) {
        this.trainerID = trainerID;
        this.name = name;
        this.course = course;
        this.govtidno = govtidno;
        this.yearOfCareer = yearOfCareer;
    }
    // Methods
    // Getters
    Trainer.prototype.getTrainerID = function () {
        return this.trainerID;
    };
    Trainer.prototype.getName = function () {
        return this.name;
    };
    Trainer.prototype.getCourse = function () {
        return this.course;
    };
    Trainer.prototype.getGovtIdNo = function () {
        return this.govtidno;
    };
    Trainer.prototype.getExperience = function () {
        return new Date().getFullYear() - this.yearOfCareer;
    };
    // Setters
    Trainer.prototype.setCourse = function (newCourse, key) {
        var authorized = this.authentication(key);
        if (authorized)
            this.course = newCourse;
        return authorized;
    };
    // Funcitonailites
    // Abstracted Functions
    Trainer.prototype.authentication = function (key) {
        return key === "secretKey";
    };
    return Trainer;
}());
var trainer1 = new Trainer(1, "John", "Computer Scrience", "ABCD1234", 1997);
var trainer2 = new Trainer(2, "Kavya", "Social Studies", "EFGH5678", 2013);
console.log(trainer1.getCourse());
var response = trainer1.setCourse("IT", "secretKey");
if (response) {
    console.log("Updated successfully");
}
else {
    console.log("Authentication failed");
}
console.log(trainer1.getCourse());
