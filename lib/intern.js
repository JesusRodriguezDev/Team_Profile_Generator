// importing Employee 
const Employee = require('./Employee');

// extending employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 
        this.school = school; 
    }

    // getting school 
    getSchool () {
        return this.school;
    }

    // assigning/overwritting to intern role
    getRole () {
        return "Intern";
    }
}

// exporting
module.exports = Intern; 