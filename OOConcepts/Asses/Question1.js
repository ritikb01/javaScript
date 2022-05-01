var fs = require('fs');
var name = fs.readFileSync('input.txt').toString();
let str =name.trim().split(",");

//Fill your code here

const Person={
    name: str[0]
};

const Employee = {
    employeeId: str[1]
};
Employee.__proto__=Person;

console.log(`Using inherited instance`);
console.log(`Name : ${Employee.name}`);
console.log(`Employee Id : ${Employee.employeeId}`);

