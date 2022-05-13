// inporting employee
const Employee = require('../lib/Employee');

// making employee object
test('creating employee object', () => {
    const employee = new Employee('Jesus', 123456, 'jesusrodriguez7@comcast.net');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// name testing 
test('geting employee name', () => {
    const employee = new Employee('Jesus', 123456, 'jesusrodriguez7@comcast.net');

    expect(employee.getName()).toEqual(expect.any(String));
});

// ID testing 
test('geting employee ID', () => {
    const employee = new Employee('Jesus', 123456, 'jesusrodriguez7@comcast.net');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// email testing
test('getting employee email', () => {
    const employee = new Employee('Nicole', 123456, 'nicole.elisaw@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// employee role testing
test('getting employee role', () => {
    const employee = new Employee('Jesus', 123456, 'jesusrodriguez7@comcast.net');

    expect(employee.getRole()).toEqual("Employee");
}); 