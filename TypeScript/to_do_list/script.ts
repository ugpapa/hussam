// Interface for a single todo item
interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

// To-do list array
let todos: TodoItem[] = [];

// Function to add a new task from the input field
function addTask() {
  const taskInput = document.getElementById("taskInput") as HTMLInputElement;
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTodoItem(taskText);
    taskInput.value = "";
    renderTodoList();
  }
}

// Function to add a new todo item
function addTodoItem(text: string) {
  const newTodo: TodoItem = {
    id: todos.length + 1,
    text,
    completed: false,
  };
  todos.push(newTodo);
}

// Function to toggle the completion status of a todo item
function toggleTodoItem(id: number) {
  const todoItem = todos.find((todo) => todo.id === id);
  if (todoItem) {
    todoItem.completed = !todoItem.completed;
  }
}

// Function to render the to-do list
function renderTodoList() {
  const todoList = document.getElementById("todo-list");
  if (todoList != null) {
    todoList.innerHTML = "";

    todos.forEach((todo) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <input type="checkbox" ${todo.completed ? "checked" : ""} 
          onclick="toggleTodoItem(${todo.id})">
        <span class="${todo.completed ? "completed" : ""}">${todo.text}</span>
      `;
      todoList.appendChild(listItem);
    });
  }
}
