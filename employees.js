let faker = require('faker');
let fs = require('fs');

const generateEmployee = () => {
  return {
    id: faker.random.uuid(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
  };
};

const generateEmployees = (numUsers) => {
  return Array.from({ length: numUsers }, generateEmployee);
};

let dataObj = generateEmployees(10);
fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));