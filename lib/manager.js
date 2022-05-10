// importing Employee
const Employee = require('./Employee');

// extending Employee
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // assigning/overwritting to manager role
    getRole () {
        return "Manager";
    }
}

// exporting
module.exports = Manager; 