// 1. Type annotations: allows to define type of variable, function parameters and their return types

// Variable type annotations
let myString: string = "Hello World";
let myNumber: number = 4;
let myBoolean: boolean = true;

// Explicit type function parameter and return type annotations
function addExplicit(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(addExplicit(5, 10));

// Implicit function parameter and return type annotations
function addImplicit(num1, num2) {
  return num1 + num2;
}

// To avoid errors with implicit type functions, let's define params and return types before hand
let number1: number = 5;
let number2: number = 10;
let result: number = addImplicit(number1, number2);
console.log(result);

// 2. Interfaces: allow to define the structure of an object
// Interfaces can have both properties and methods
// Interfaces are blueprints for objects and can be used to define custom types

interface CarInterface {
  make: string;
  model: string;
  year: number;
}

let myCar: CarInterface = {
  make: "Honda",
  model: "Civic",
  year: 2000,
};
console.log(myCar.make);
console.log(typeof myCar.make);

// 3. Classes: allow to define a blueprint for an object
// a. Class with properties, constructor and methods
class Car {
  // Properties
  make: string;
  model: string;
  year: number;
  // Constructor
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  // Method
  print(): void {
    console.log(`${this.make} ${this.model} ${this.year}`);
  }
}

let myCar2 = new Car("Honda", "Civic", 2000);
myCar2.print();

// b. Class with constructor shorthand: a concise way of declaring class properties and initializing them directly within the constructor's parameter list.
class CarAgain {
  constructor(
    public make: string,
    public model: string,
    public year: number,
    public isOn: boolean
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isOn = false;
  }
  startEngine(): void {
    if (!this.isOn) {
      this.isOn = true;
      console.log("Engine started");
    } else {
      console.log("Engine already started");
    }
  }
}

let myCar3 = new CarAgain("Toyota", "Corolla", 2000, false);
myCar3.startEngine();

// c. Inheritance: allows to create a new class from an existing class
class SportsCar extends CarAgain {
  constructor(
    public model: string,
    public make: string,
    public year: number,
    public isOn: boolean,
    public topSpeed: number
  ) {
    super(model, make, year, isOn);
    this.topSpeed = topSpeed;
  }
  topSpeedCheck(): void {
    super.startEngine(); // call a method from base class without writing it again
    console.log(`Top speed is ${this.topSpeed}`);
  }
}

let mySportsCar = new SportsCar("Ferrari", "F50", 2000, false, 200);
// Call methods from base class
mySportsCar.startEngine();
// Call methods from derived class
mySportsCar.topSpeedCheck();

// 4. Generics: allow to create reusable components
function echo<T>(arg: T): T {
  return arg;
}

// implicit type declaration with generics
console.log(typeof echo("Hi"));
console.log(typeof echo(5));
console.log(typeof echo(true));
// explicit type declaration with generics
console.log(typeof echo<string>("Hi"));
let array: string[] = echo<string[]>(["apple", "banana", "cherry"]); // T is explicitly set as string[]
console.log(array);
console.log(typeof array[0]);

// generics are not limited to functions
class GenericClass<T> {
  constructor(public value: T) {}
  print(): void {
    console.log(this.value);
  }
}

interface GenericInterface<T> {
  value: T;
}

let myGenericClass = new GenericClass<string>("Hello World");
myGenericClass.print();

let myGenericInterface: GenericInterface<number> = { value: 5 };
console.log(myGenericInterface.value);
console.log("Here");

// 5. Type Guards
// a. typeof
function processValue(value: number | string) {
  if (typeof value === "number") {
    // value is narrowed down to number type
    console.log(value.toFixed(2));
  } else {
    console.log(value.trim().toUpperCase());
  }
}

processValue(5.1234);
processValue("Hello World");

// b. instanceof
class Circle {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}

function calculateArea(shape: Circle | Rectangle) {
  if (shape instanceof Circle) {
    console.log(shape.getArea().toFixed(2));
  } else {
    console.log(shape.getArea().toFixed(2));
  }
}

let myShape: Circle = new Circle(5);
let myShape2: Rectangle = new Rectangle(5, 10);

calculateArea(myShape);
calculateArea(myShape2);

class frontEndTeam {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getTeam(): string {
    return "frontend team";
  }
}

class backEndTeam {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getTeam(): string {
    return "backend team";
  }
}

function teamCheck(name: frontEndTeam | backEndTeam) {
  if (name instanceof frontEndTeam) {
    console.log(`${name.name} is from ${name.getTeam()}`);
  } else {
    console.log(`${name.name} is from ${name.getTeam()}`);
  }
}

let member1 = new backEndTeam("Hussam");
let member2 = new frontEndTeam("Joker");

teamCheck(member1);
teamCheck(member2);

// 6. Type Assertion/Type Casting
// a. Angle Bracket Syntax
let myValue: any = "10";
let myLengthExplicit: number = (<string>myValue).length;
console.log(myLengthExplicit);
console.log(typeof myLengthExplicit);

// b. as Syntax
let value: any = "Hello typescript";
let length2: number = (value as string).length;
console.log(length2);

// 7. Type inference: eliminates the need for explicit type annotations
// a. Variable type inference
let myString2 = "Hello World";
let myNumber2 = 4;
let myBoolean2 = true;

// b. Function return type inference
function add2(num1: number, num2: number) {
  return num1 + num2;
}

// c. Object type inference
let myCar4 = {
  make: "Honda",
  model: "Civic",
  year: 2000,
};

console.log(myCar3.make);
console.log(typeof myCar3.make);

// 8. Intersection Types: allow to combine multiple types into one
// a. on objects
interface Printable {
  print(): void;
}

interface Loggable {
  log(): void;
}

type PrintableLoggable = Printable & Loggable;

const obj: PrintableLoggable = {
  print() {
    console.log("printing");
  },
  log() {
    console.log("loging");
  },
};

function printAndLog(obj: PrintableLoggable) {
  obj.print();
  obj.log();
}

printAndLog(obj);

// b. on classes
interface Renderable {
  render(): void;
}

interface Dragable {
  drag(): void;
}

type RenderableDragable = Renderable & Dragable;

class Button implements RenderableDragable {
  render() {
    console.log("rendering");
  }
  drag() {
    console.log("dragging");
  }
}

function renderAndDrag(obj: RenderableDragable) {
  obj.render();
  obj.drag();
}

// create an instance of button class that has only two methdos
let button = new Button();
renderAndDrag(button);

// 9. Union Types: allow to combine multiple types into one

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

// create a type alias that combines two interfaces
type Shape = Square | Rectangle;

function area(shape: Shape) {
  if (shape.kind === "square") {
    return shape.size * shape.size;
  } else {
    return shape.width * shape.height;
  }
}

let mySqaure: Square = { kind: "square", size: 5 };
let result1: number = area(mySqaure);
console.log(result1);

// create a type alias
type Point = {
  x: number;
  y: number;
};

// create another type alias that uses union type
type Rect = {
  x: Point;
  y: Point;
};

let rect: Rect = {
  x: { x: 10, y: 20 },
  y: { x: 20, y: 30 },
};

function rectArea(rect: Rect) {
  return (rect.y.x - rect.x.x) * (rect.y.y - rect.x.y);
}

console.log(rectArea(rect).toFixed(2));

// 10. Decorators: allow to add metadata to a class, method, accessor, property or parameter

function logClass(target: Function) {
  console.log(`Class: ${target.name}`);
}

@logClass
class MyClass {
  constructor() {
    console.log("Constructor");
  }
}

new MyClass();