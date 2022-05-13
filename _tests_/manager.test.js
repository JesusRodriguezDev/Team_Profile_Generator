// importing manager
const Manager = require('../lib/Manager');

// makes manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Jesus', 123456, 'jesusrodriguez7@comcast.net', 250);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//testing role of employee
test('gets role of employee', () => {
    const manager = new Manager('Jesus', 123456, 'jesusrodriguez7@comcast.net', 250);

    expect(manager.getRole()).toEqual("Manager");
}); 