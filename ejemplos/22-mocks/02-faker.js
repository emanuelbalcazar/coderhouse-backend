const faker = require('faker');
const fs = require('fs');

let str = 'NOMBRE; APELLIDO; EMAIL; TRABAJO; LUGAR\r\n';

for (let i = 0; i < 50; i++) {
    str += faker.name.firstName() +
    ';' + faker.name.lastName() +
    ';' + faker.internet.email() +
    ';' + faker.name.jobTitle() +
    ';' + faker.random.locale() +
    '\r\n'
}

fs.writeFileSync('test.csv', str);
