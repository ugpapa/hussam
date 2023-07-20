// To-do list array
var todos = [];
// Function to add a new task from the input field
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText) {
        addTodoItem(taskText);
        taskInput.value = "";
        renderTodoList();
    }
}
// Function to add a new todo item
function addTodoItem(text) {
    var newTodo = {
        id: todos.length + 1,
        text: text,
        completed: false,
    };
    todos.push(newTodo);
}
// Function to toggle the completion status of a todo item
function toggleTodoItem(id) {
    var todoItem = todos.find(function (todo) { return todo.id === id; });
    if (todoItem) {
        todoItem.completed = !todoItem.completed;
    }
}
// Function to render the to-do list
function renderTodoList() {
    var todoList = document.getElementById("todo-list");
    if (todoList != null) {
        todoList.innerHTML = "";
        todos.forEach(function (todo) {
            var listItem = document.createElement("li");
            listItem.innerHTML = "\n        <input type=\"checkbox\" ".concat(todo.completed ? "checked" : "", " \n          onclick=\"toggleTodoItem(").concat(todo.id, ")\">\n        <span class=\"").concat(todo.completed ? "completed" : "", "\">").concat(todo.text, "</span>\n      ");
            todoList.appendChild(listItem);
        });
    }
}
