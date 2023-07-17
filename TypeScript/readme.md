# TypeScript Basics: Interfaces, Enums, and Generics
This repository contains a TypeScript program showcasing the concepts of interfaces, enums, and generics. The code demonstrates how to define interfaces to shape object structures, use enums for named constant values, and leverage generics for creating reusable components that work with multiple data types.

## Prerequisites
To run this TypeScript program, you need to have the following installed:

Node.js and npm (Node Package Manager)

## Installation
1. Clone this repository to your local machine or download the code as a ZIP file.
2. Open a terminal or command prompt and navigate to the project's root directory.
3. Run npm install to install the required dependencies.

## Usage
After installation, run the program by executing npm start in the terminal.
The program will prompt you to enter a password. If you input the correct password ("hussam"), it will execute the main functionality, showcasing interfaces, enums, and generics in TypeScript. Otherwise, it will display an "Wrong password" alert.

## What the Program Does
The TypeScript program defines an interface Person to represent a person's information, such as their first name, last name, salary, and employment status. It then creates a sample person object and prints their information using a function employeeInformation.

Next, the program demonstrates enums (CarBrand) to represent different car brands. It uses an if-else statement to print the car brand based on the value stored in myCarBrand.

Finally, the code showcases the concept of generics with the echo function. This function accepts a parameter of any type and returns the same value. The program demonstrates how to use echo with different data types and prints their corresponding types.
