# To-Do List Web App
This is a simple web application that allows you to create and manage a to-do list. The application is written in JavaScript and uses HTML and CSS for the user interface.

## Features
1. Add new tasks to the to-do list.
2. Mark tasks as completed using checkboxes.
3. Delete tasks from the list.
4. Tasks are stored in an array and rendered dynamically on the page.

## How to Use
- Clone or download the repository to your local machine.

- Open the index.html file in your web browser.

- In the web app, you'll find an input field to enter your tasks and a button to add them to the list.

- Enter a task in the input field and click the "Add" button to add it to the list.

- To mark a task as completed, simply click the checkbox next to the task name. Completed tasks will have a line through the text.

- If you want to remove a task from the list, click the "Delete" button next to the task.

The to-do list will persist in memory as long as you are on the page. If you refresh the page or close the browser, the list will be reset.

## Code Explanation
The JavaScript code in script.js performs the following tasks:

1. Selects necessary HTML elements using document.getElementById() and assigns them to variables for further use.

2. Declares an empty array tasks to store the tasks added by the user.

3. Provides a function renderTasks() to render the tasks dynamically on the web page. It iterates through the tasks array and creates the necessary elements (checkbox, task name, and delete button) for each task.

4. Implements the addItem() function, which adds a new task to the tasks array. The function first checks if the input is empty before adding the task to the list. It then calls renderTasks() to update the display.

5. The toggleTaskCompletion(index) function handles the event when a user clicks on the checkbox. It changes the completed property of the corresponding task in the tasks array and then updates the display using renderTasks().

6. The deleteTask(index) function removes a task from the tasks array based on its index and updates the display using renderTasks().

7. Finally, the code adds an event listener to the "Add" button to call the addItem() function when the button is clicked.

## Conclusion
This to-do list web app is a simple example of using JavaScript to manage and update an array of tasks and then render them dynamically on a web page. Feel free to customize the app and add more features according to your needs and preferences. Happy coding!