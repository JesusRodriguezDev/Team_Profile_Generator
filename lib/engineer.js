// importing Employee
const Employee = require("./Employee");

// extending employee 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }

    // getting github
    getGithub () {
        return this.github;
    }

     // assigning/overwritting to engineer role
    getRole () {
        return "Engineer";
    }
}

// exporting
module.exports = Engineer; 