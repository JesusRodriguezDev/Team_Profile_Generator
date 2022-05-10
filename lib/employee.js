//constructor 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // getting name from user input
    getName () {
        return this.name;
    }

    // getting ID from user input
    getId () {
        return this.id;
    }   

    // getting email from user input
    getEmail () {
        return this.email;
    }

    // getting employee type from user input
    getRole () {
        return 'Employee'; 
    }
};

// to be exported 
module.exports = Employee; 