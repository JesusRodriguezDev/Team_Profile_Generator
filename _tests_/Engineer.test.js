//importing engineer 
const Engineer = require('../lib/Engineer');

// makes engineer object  
test('creating engineer object', () => {
    const engineer = new Engineer('Jesus', 123456, 'jesusrodriguez7@comcast.net', 'JesusRodriguezDev');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// github testing
test('getting engineer github value', () => {
    const engineer = new Engineer('Jesus', 123456, 'jesusrodriguez7@comcast.net', 'JesusRodriguezDev');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// employee role testing 
test('getting role of employee', () => {
    const engineer = new Engineer('Jesus', 123456, 'jesusrodriguez7@comcast.net', 'JesusRodriguezDev');

    expect(engineer.getRole()).toEqual("Engineer");
});