// Interfaces in TypeScript define a contract that shapes the structure of an object.
// They allow you to specify the shape of an object by describing the names and types of its properties.
var hussam = {
    firstName: "Hussam",
    lastName: "Haq",
    salary: 100000,
    isAdlerEmployee: true,
};
function employeeInformation(person) {
    if (person.isAdlerEmployee) {
        console.log("".concat(person.firstName, " ").concat(person.lastName, ", ").concat(person.salary));
    }
}
employeeInformation(hussam);
//Enums (short for enumerations) in TypeScript allow to define a set of named constant values, making it
// easier to work with related values in a more readable and maintainable way.
var CarBrand;
(function (CarBrand) {
    CarBrand[CarBrand["BMW"] = 0] = "BMW";
    CarBrand[CarBrand["Mercedes"] = 1] = "Mercedes";
    CarBrand[CarBrand["Audi"] = 2] = "Audi";
    CarBrand[CarBrand["Toyota"] = 3] = "Toyota";
    CarBrand[CarBrand["Honda"] = 4] = "Honda";
})(CarBrand || (CarBrand = {}));
var myCarBrand = CarBrand.BMW;
if (myCarBrand === CarBrand.BMW) {
    console.log("I drive a BMW");
}
else if (myCarBrand === CarBrand.Mercedes) {
    console.log("I drive a Mercedes");
}
else if (myCarBrand === CarBrand.Audi) {
    console.log("I drive an Audi");
}
else if (myCarBrand === CarBrand.Toyota) {
    console.log("I drive a Toyota");
}
// static types demonstration in TypeScript
function add(num1, num2) {
    return num1 + num2;
}
var number1 = 6;
var number2 = 5;
console.log(add(number1, number2));
// Generics in TypeScript allow you to create reusable components and functions that can work with a
// variety of data types
function echo(parameter) {
    return parameter;
}
var myString = echo("Hello World");
var myNumber = echo(5);
var myBoolean = echo(true);
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
function echoAgain(input) {
    return input;
}
var countryName = echoAgain("Canada");
var countryPopulation = echoAgain(38000000);
var countryIsSafe = echoAgain(true);
console.log(typeof countryName);
console.log(typeof countryPopulation);
console.log(typeof countryIsSafe);
