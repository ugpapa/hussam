"use strict";
// 1. Type annotations: allows to define type of variable, function parameters and their return types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Variable type annotations
var myString = "Hello World";
var myNumber = 4;
var myBoolean = true;
// Explicit type function parameter and return type annotations
function addExplicit(num1, num2) {
    return num1 + num2;
}
console.log(addExplicit(5, 10));
// Implicit function parameter and return type annotations
function addImplicit(num1, num2) {
    return num1 + num2;
}
// To avoid errors with implicit type functions, let's define params and return types before hand
var number1 = 5;
var number2 = 10;
var result = addImplicit(number1, number2);
console.log(result);
var myCar = {
    make: "Honda",
    model: "Civic",
    year: 2000,
};
console.log(myCar.make);
console.log(typeof myCar.make);
// 3. Classes: allow to define a blueprint for an object
// a. Class with properties, constructor and methods
var Car = /** @class */ (function () {
    // Constructor
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method
    Car.prototype.print = function () {
        console.log("".concat(this.make, " ").concat(this.model, " ").concat(this.year));
    };
    return Car;
}());
var myCar2 = new Car("Honda", "Civic", 2000);
myCar2.print();
// b. Class with constructor shorthand: a concise way of declaring class properties and initializing them directly within the constructor's parameter list.
var CarAgain = /** @class */ (function () {
    function CarAgain(make, model, year, isOn) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isOn = isOn;
        this.make = make;
        this.model = model;
        this.year = year;
        this.isOn = false;
    }
    CarAgain.prototype.startEngine = function () {
        if (!this.isOn) {
            this.isOn = true;
            console.log("Engine started");
        }
        else {
            console.log("Engine already started");
        }
    };
    return CarAgain;
}());
var myCar3 = new CarAgain("Toyota", "Corolla", 2000, false);
myCar3.startEngine();
// c. Inheritance: allows to create a new class from an existing class
var SportsCar = /** @class */ (function (_super) {
    __extends(SportsCar, _super);
    function SportsCar(model, make, year, isOn, topSpeed) {
        var _this = _super.call(this, model, make, year, isOn) || this;
        _this.model = model;
        _this.make = make;
        _this.year = year;
        _this.isOn = isOn;
        _this.topSpeed = topSpeed;
        _this.topSpeed = topSpeed;
        return _this;
    }
    SportsCar.prototype.topSpeedCheck = function () {
        _super.prototype.startEngine.call(this); // call a method from base class without writing it again
        console.log("Top speed is ".concat(this.topSpeed));
    };
    return SportsCar;
}(CarAgain));
var mySportsCar = new SportsCar("Ferrari", "F50", 2000, false, 200);
// Call methods from base class
mySportsCar.startEngine();
// Call methods from derived class
mySportsCar.topSpeedCheck();
// 4. Generics: allow to create reusable components
function echo(arg) {
    return arg;
}
// implicit type declaration with generics
console.log(typeof echo("Hi"));
console.log(typeof echo(5));
console.log(typeof echo(true));
// explicit type declaration with generics
console.log(typeof echo("Hi"));
var array = echo(["apple", "banana", "cherry"]); // T is explicitly set as string[]
console.log(array);
console.log(typeof array[0]);
// generics are not limited to functions
var GenericClass = /** @class */ (function () {
    function GenericClass(value) {
        this.value = value;
    }
    GenericClass.prototype.print = function () {
        console.log(this.value);
    };
    return GenericClass;
}());
var myGenericClass = new GenericClass("Hello World");
myGenericClass.print();
var myGenericInterface = { value: 5 };
console.log(myGenericInterface.value);
// // 5. Modules
// // a. Exporting
// b. Importing
var basics_1 = require("./basics");
(0, basics_1.main)();
