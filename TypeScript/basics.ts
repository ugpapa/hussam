// Interfaces in TypeScript define a contract that shapes the structure of an object.
// They allow you to specify the shape of an object by describing the names and types of its properties.
export function main(): void {
  interface Person {
    firstName: string;
    lastName: string;
    salary: number;
    isAdlerEmployee: boolean;
  }

  let hussam: Person = {
    firstName: "Hussam",
    lastName: "Haq",
    salary: 100000,
    isAdlerEmployee: true,
  };

  function employeeInformation(person: Person) {
    if (person.isAdlerEmployee) {
      console.log(`${person.firstName} ${person.lastName}, ${person.salary}`);
    }
  }

  employeeInformation(hussam);

  //Enums (short for enumerations) in TypeScript allow to define a set of named constant values, making it
  // easier to work with related values in a more readable and maintainable way.

  enum CarBrand {
    BMW,
    Mercedes,
    Audi,
    Toyota,
    Honda,
  }

  let myCarBrand: CarBrand = CarBrand.BMW;

  if (myCarBrand === CarBrand.BMW) {
    console.log("I drive a BMW");
  } else if (myCarBrand === CarBrand.Mercedes) {
    console.log("I drive a Mercedes");
  } else if (myCarBrand === CarBrand.Audi) {
    console.log("I drive an Audi");
  } else if (myCarBrand === CarBrand.Toyota) {
    console.log("I drive a Toyota");
  }

  // static types demonstration in TypeScript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  let number1: number = 6;
  let number2: number = 5;
  console.log(add(number1, number2));

  // Generics in TypeScript allow you to create reusable components and functions that can work with a
  // variety of data types

  function echo<T>(parameter: T): T {
    return parameter;
  }

  let myString: string = echo("Hello World");
  let myNumber: number = echo(5);
  let myBoolean: boolean = echo(true);
  console.log(typeof myString);
  console.log(typeof myNumber);
  console.log(typeof myBoolean);
}

function echoAgain<T>(input: T): T {
  return input;
}


let password = echoAgain(prompt("Enter password"));
if (password === "hussam") {
  main();
} else {
  alert("Wrong password");
}
