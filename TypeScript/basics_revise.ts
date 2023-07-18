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

// // 5. Modules
// // a. Exporting
// b. Importing
import { main } from "./basics";
main();
