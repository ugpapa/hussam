# Learning JavaScript Concepts

This repository contains code files that cover various JavaScript concepts, including data types, loops, conditionals, functions, and asynchronous handling. The code files added in this push are as follows:

## Files

### 1. callback.js

- **Concepts Covered**: Functions
- **Description**: This file demonstrates the usage of callback functions in JavaScript highlighting their importance in asynchronous programming.

### 2. guess_number_async.js

- **Concepts Covered**: Loops, conditionals, async handling, functions
- **Description**: This file focuses on asynchronous handling in JavaScript. It introduces the concept of callback functions, using a number-guessing game as an example. It demonstrates how to handle asynchronous operations effectively to avoid blocking the execution of other code.

### 3. guess_number_sync.js

- **Concepts Covered**: Loops, conditionals, dtypes, functions
- **Description**: This file presents a synchronous version of the number-guessing game and utilizes `readline-sync` module. It showcases the usage of loops and conditionals to create a sequential execution flow. While it lacks the async handling features of the previous file, it emphasizes the fundamentals of control flow in JavaScript.

### 4. cart_project.js

- **Concepts Covered**: Functions, loops, conditionals, async handling, callbacks, arrays, objects.
- **Description**: The project allows users to add and remove items from their cart. Each item in the cart has properties such as name, price, and quantity.

    The code uses the readline module to interact with the user in the command-line interface. It provides a function called addItems that prompts the user to enter details for each item, including the item name, price, and quantity. The user can choose to add multiple items by answering "y" to the "Another item?" prompt. The items are stored in an array called cart.

    After the user finishes adding items, a callback function is executed. This callback function displays the cart items and calculates the total price for each item and the overall total price. It then prompts the user if they want to remove an item from the cart. If the user answers "y", they are prompted to enter the index of the item they want to remove. The item is then removed from the cart using the splice() method. Finally, the updated cart is displayed, along with the remaining total price.

    The project demonstrates the use of callbacks, user input handling, array manipulation, and displaying cart details. It showcases the basic functionality of a shopping cart application.

### 5. functions_oop.js
- **Concepts Covered**: Functions, OOP.
- **Description**: This file code to practice different functions in .js including named functions, annonymous functions, and arrow functions. The file also touches OOP in .js and shows how arrow functions handle scoping differently. Arrow functions keep the scope set during function definition whereas named functions assume the scope from where they are run.

### 6. promises.js
- **Concepts Covered**: Promises
- **Description**: This file covers the concept of promises in .js. It focuses on practicing the syntax. Moreover, it also compares promises with callbacks. The file also practices different promise methods like `promise.all` and `promise.race`.

### 7. cart_project_promises.js
- **Concepts Covered**: Promises to control async execution flow, arrays, objects, loops, functions, arrow functions, dtypes, scoping etc. 
- **Description**:  This file mplements a command line interface for adding items to a cart. It utilizes the readline module to prompt the user for item details such as name, price, and quantity. The user can add multiple items to the cart by responding to the question "Another item? y/n". The code validates user input and handles errors if a wrong key is pressed using promises. Once the user finishes adding items, the contents of the cart are displayed.

### 8. opp.js
- **Concepts Covered**: OOP in .js. Class properties, class methods. (No inheritance or encapsulation yet!) 
- **Description**:  This JavaScript file defines a Car class that represents a car object. The Car class has properties like make, model, year, and methods like `startEngine()`, `stopEngine()`, and `drive()`. It allows you to interact with a car by starting and stopping the engine, and driving it.

### 9. revise.js
- **Concepts Covered**: Promises, async methods (`setTimeout()`), async handling through promises, functions, recursive functions, conditionals, user inputs, etc.
- **Description**: This file simulates a file download operation from a site. It prompts user to check if the user wants to download a file. It allows the user to do multiple file downloads. Download time is simulated using `setTimeout()` method, which is an async method, built-in to .js. The file demonstrates the ability to handle async processes in .js using promises. It also demonstrates the ability to use recursive logic.

## Usage

Feel free to explore the code files in this repository to better understand the covered concepts. Each file is self-contained and can be run independently.

