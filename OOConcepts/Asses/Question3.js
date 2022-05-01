var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code

class Customer{
    constructor(name){
        this.name=name;
    }
    sayWelcome(){
        console.log(`Welcome ${this.name}`);
    }
};

let obj1 = new Customer(input[0]);
obj1.sayWelcome();
