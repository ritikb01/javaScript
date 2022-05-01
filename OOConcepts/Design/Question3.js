//Solution 1 using Constructor function 

var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code

let cir = input[0].trim().split(',');
let sqa = input[1].trim().split(',');
let tri = input[2].trim().split(',');


const Shape = function(name,nos,color){
    this.name=name;
    this.nos=nos;
    this.color=color;
};

Shape.prototype.ShapeColor =function(){
    console.log(`${this.name} is in color ${this.color}`);
};

const Circle = function(name,nos,color){
    Shape.call(this, name,nos,color);
};
Circle.prototype=Object.create(Shape.prototype);
Circle.prototype.displayShapeSides =function(){
    console.log(`${this.name} has ${this.nos} sides`);
};

const Square = function(name,nos,color){
    Shape.call(this, name,nos,color);
};
Square.prototype=Object.create(Shape.prototype);
Square.prototype.displayShapeSides =function(){
    console.log(`${this.name} has ${this.nos} sides`);
};

const Triangle = function(name,nos,color){
    Shape.call(this, name,nos,color);
};
Triangle.prototype=Object.create(Shape.prototype);
Triangle.prototype.displayShapeSides =function(){
    console.log(`${this.name} has ${this.nos} sides`);
};

let c = new Circle(cir[0],cir[1],cir[2]);
c.ShapeColor();
c.displayShapeSides();

let s = new Circle(sqa[0],sqa[1],sqa[2]);
s.ShapeColor();
s.displayShapeSides();

let t = new Circle(tri[0],tri[1],tri[2]);
t.ShapeColor();
t.displayShapeSides();

//Solution 2 using classes

var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code

let cir = input[0].trim().split(',');
let sqa = input[1].trim().split(',');
let tri = input[2].trim().split(',');

class Shape{
    constructor(name,nos,color){
        this.name=name;
        this.nos=nos;
        this.color=color;
    }
    ShapeColor(){
        console.log(`${this.name} is in color ${this.color}`);
    }
}

class Circle extends Shape{
    constructor(name,nos,color){
        super(name,nos,color);
    }
    displayShapesSides(){
        console.log(`${this.name} has ${this.nos} sides`);
    }
}

class Square extends Shape{
    constructor(name,nos,color){
        super(name,nos,color);
    }
    displayShapesSides(){
        console.log(`${this.name} has ${this.nos} sides`);
    }
}

class Triangle extends Shape{
    constructor(name,nos,color){
        super(name,nos,color);
    }
    displayShapesSides(){
        console.log(`${this.name} has ${this.nos} sides`);
    }
}

let c = new Circle(cir[0],cir[1],cir[2]);
c.ShapeColor();
c.displayShapesSides();
let s = new Square(sqa[0],sqa[1],sqa[2]);
s.ShapeColor();
s.displayShapesSides();
let t = new Triangle(tri[0],tri[1],tri[2]);
t.ShapeColor();
t.displayShapesSides();




