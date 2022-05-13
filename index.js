// importing generateHTML
const generateHTML = require('./src/generateHTML');

// importing each employee type
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// importing needed node modules
const fs = require('fs'); 
const inquirer = require('inquirer');

// team array
const teamArray = []; 

// prompts for manager
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the name of the team's manager", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's ID, must be a number!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter a valid email address')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter only numbers office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
    console.log(`
    *****************************
    ** Team Creation Questions **
    *****************************
   
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose employee's role =>",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter employee's name =>", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter employee's name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID =>",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address =>",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter a valid email address")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter employee's github username=>",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school name =>",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter intern's school name")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more members to your team?',
            default: false
        }
    ])
    .then(employeeData => {
        // employee info
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};


// function that generates HTML page using file system module
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // error message
        if (err) {
            console.log(err);
            return;
        // success message
        } else {
            console.log("Team profile has been successfully created!!! See index.html for final diagram")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });