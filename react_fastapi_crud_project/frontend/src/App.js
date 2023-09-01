import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/todos/")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const addToDo = () => {
    fetch("http://127.0.0.1:8000/todos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: newTask }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos([...todos, data]);
        setNewTask("");
      });
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="main-container">
       <img src={process.env.PUBLIC_URL + '/icons8-todo-list-100.png'} alt="Logo" className="app-logo" />
      <h1>My To-Do List</h1>
      <div>
        <input
          className="add-todo-input"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-todo" onClick={addToDo}>Add</button>
      </div>
  
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={removeTodo} />
      ))}
    </div>
  );
}

export default App;
