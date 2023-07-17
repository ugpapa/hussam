// select html elements
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// declare an empty array to hold task inputs
let tasks = [];

// function to render items on page
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    // create a list item to populate <ul> in index.html
    const listItem = document.createElement("li");

    // add checkbox
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = task.completed;
    checkBox.addEventListener("change", () => {
      toggleTaskCompletion(index);
    });

    // add a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteTask(index);
    });

    // add task name
    const taskName = document.createElement("span");
    taskName.textContent = task.name;
    taskName.className = task.completed ? "completed" : "";

    listItem.appendChild(checkBox);
    listItem.appendChild(taskName);
    listItem.appendChild(deleteButton)
    taskList.appendChild(listItem);
  });
}

// function to add items to tasks array
function addItem() {
  itemName = taskInput.value;
  if (itemName.trim() === "") {
    return;
  } else {
    newItem = {
      name: itemName,
      completed: false,
    };
    tasks.push(newItem);
  }
  renderTasks();
  taskInput.value = "";
}

// Func to handle toggles. On a change effects task.completed boolean
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Func to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}


addButton.addEventListener("click", addItem);
