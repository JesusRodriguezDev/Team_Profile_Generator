// importing intern
const Intern = require('../lib/Intern');

// makes intern object  
test('creating an Intern object', () => {
    const intern = new Intern('Jesus', 123456, 'jesusrodriguez7@comcast.net', 'DU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// school testing
test('getting school of employee', () => {
    const intern = new Intern('Jesus', 123456, 'jesusrodriguez7@comcast.net', 'DU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// employee's role testing
test('getting role of employee', () => {
    const intern = new Intern('Jesus', 123456, 'jesusrodriguez7@comcast.net', 'DU');

    expect(intern.getRole()).toEqual("Intern");
}); 