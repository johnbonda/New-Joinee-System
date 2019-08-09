function Trainer(trainerID, name, course, govtidno, yearOfCareer) {
    // Properties
    var sessionsTaken = 0;

    // Methods
    // Getters
    this.getTrainerID = function() {
        return trainerID;
    }
    this.getName = function() {
        return name;
    }
    this.getCourse = function() {
        return course;
    }
    this.getGovtIdNo = function() {
        return govtidno;
    }
    this.getExperience = function() {
        return new Date().getFullYear - yearOfCareer;
    }

    // Setters
    this.setCourse = function(newCourse, key) {
        var authorized = authentication(key);
       if(authorized) 
            course = newCourse;
        return authorized;
    }
    
    // Funcitonailites

    // Abstracted Functions
    function authentication(key) {
        return key === "secretKey";
    }
}

var trainer1 = new Trainer(1,"John", "Computer Scrience", "ABCD1234", 1997);
var trainer2 = new Trainer(2, "Kavya", "Social Studies", "EFGH5678", 2013);

console.log(trainer1.getCourse());

var response = trainer1.setCourse("IT", "secretKey");
if(response) {
    console.log("Updated successfully");
} else {
    console.log("Authentication failed");
}

console.log(trainer1.getCourse());