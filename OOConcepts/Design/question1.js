//Solution 1 using classes ES6

var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');

//Fill your code here
let sm=input[0].trim().split(',');
let bm=input[1].trim().split(',');

class SuperHero{
    constructor(name,alias,planet){
        this.name=name;
        this.alias=alias;
        this.planet=planet;
}
}

    SuperHero.prototype.WhoAmI = function(){
    console.log(`${this.name} ${this.alias} is from the planet ${this.planet}`);
}

let superman= new SuperHero(sm[0],sm[1],sm[2]);
superman.WhoAmI();
let batman= new SuperHero(bm[0],bm[1],bm[2]);
batman.WhoAmI();

//Solution 2 using constructor 

var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');

//Fill your code here
let sm=input[0].trim().split(',');
let bm=input[1].trim().split(',');

SuperHero function(name,alias,planet){
        this.name=name;
        this.alias=alias;
        this.planet=planet;
}

    SuperHero.prototype.WhoAmI = function(){
    console.log(`${this.name} ${this.alias} is from the planet ${this.planet}`);
}

let superman= new SuperHero(sm[0],sm[1],sm[2]);
superman.WhoAmI();
let batman= new SuperHero(bm[0],bm[1],bm[2]);
batman.WhoAmI();
