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
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
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
console.log("Here");
// 5. Type Guards
// a. typeof
function processValue(value) {
    if (typeof value === "number") {
        // value is narrowed down to number type
        console.log(value.toFixed(2));
    }
    else {
        console.log(value.trim().toUpperCase());
    }
}
processValue(5.1234);
processValue("Hello World");
// b. instanceof
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
function calculateArea(shape) {
    if (shape instanceof Circle) {
        console.log(shape.getArea().toFixed(2));
    }
    else {
        console.log(shape.getArea().toFixed(2));
    }
}
var myShape = new Circle(5);
var myShape2 = new Rectangle(5, 10);
calculateArea(myShape);
calculateArea(myShape2);
var frontEndTeam = /** @class */ (function () {
    function frontEndTeam(name) {
        this.name = name;
    }
    frontEndTeam.prototype.getTeam = function () {
        return "frontend team";
    };
    return frontEndTeam;
}());
var backEndTeam = /** @class */ (function () {
    function backEndTeam(name) {
        this.name = name;
    }
    backEndTeam.prototype.getTeam = function () {
        return "backend team";
    };
    return backEndTeam;
}());
function teamCheck(name) {
    if (name instanceof frontEndTeam) {
        console.log("".concat(name.name, " is from ").concat(name.getTeam()));
    }
    else {
        console.log("".concat(name.name, " is from ").concat(name.getTeam()));
    }
}
var member1 = new backEndTeam("Hussam");
var member2 = new frontEndTeam("Joker");
teamCheck(member1);
teamCheck(member2);
// 6. Type Assertion/Type Casting
// a. Angle Bracket Syntax
var myValue = "10";
var myLengthExplicit = myValue.length;
console.log(myLengthExplicit);
console.log(typeof myLengthExplicit);
// b. as Syntax
var value = "Hello typescript";
var length2 = value.length;
console.log(length2);
// 7. Type inference: eliminates the need for explicit type annotations
// a. Variable type inference
var myString2 = "Hello World";
var myNumber2 = 4;
var myBoolean2 = true;
// b. Function return type inference
function add2(num1, num2) {
    return num1 + num2;
}
// c. Object type inference
var myCar4 = {
    make: "Honda",
    model: "Civic",
    year: 2000,
};
console.log(myCar3.make);
console.log(typeof myCar3.make);
var obj = {
    print: function () {
        console.log("printing");
    },
    log: function () {
        console.log("loging");
    },
};
function printAndLog(obj) {
    obj.print();
    obj.log();
}
printAndLog(obj);
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.render = function () {
        console.log("rendering");
    };
    Button.prototype.drag = function () {
        console.log("dragging");
    };
    return Button;
}());
function renderAndDrag(obj) {
    obj.render();
    obj.drag();
}
// create an instance of button class that has only two methdos
var button = new Button();
renderAndDrag(button);
function area(shape) {
    if (shape.kind === "square") {
        return shape.size * shape.size;
    }
    else {
        return shape.width * shape.height;
    }
}
var mySqaure = { kind: "square", size: 5 };
var result1 = area(mySqaure);
console.log(result1);
var rect = {
    x: { x: 10, y: 20 },
    y: { x: 20, y: 30 },
};
function rectArea(rect) {
    return (rect.y.x - rect.x.x) * (rect.y.y - rect.x.y);
}
console.log(rectArea(rect).toFixed(2));
// 10. Decorators: allow to add metadata to a class, method, accessor, property or parameter
function logClass(target) {
    console.log("Class: ".concat(target.name));
    return target;
}
var MyClass = function () {
    var _classDecorators = [logClass];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var MyClass = _classThis = /** @class */ (function () {
        function MyClass_1() {
            console.log("Constructor");
        }
        return MyClass_1;
    }());
    __setFunctionName(_classThis, "MyClass");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        MyClass = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MyClass = _classThis;
}();
new MyClass();
