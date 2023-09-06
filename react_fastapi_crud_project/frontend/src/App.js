import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Todo from "./components/Todo";
import Register from "./components/Register";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );
  useEffect(() => {
    if (isLoggedIn) {
      fetch("http://127.0.0.1:8000/todos/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((response) => {
          // Check if the status code is 401
          if (response.status === 401) {
            throw new Error("Unauthorized");
          }
          return response.json();
        })
        .then((data) => setTodos(data))
        .catch((error) => {
          console.error("Error fetching todos:", error);
          //  remove the token and set isLoggedIn to false if the error is 'Unauthorized'
          if (error.message === "Unauthorized") {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            setIsLoggedIn(false);
          }
        });
    }
  }, [isLoggedIn]);

  const addToDo = () => {
    fetch("http://127.0.0.1:8000/todos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {!isLoggedIn ? (
            <Login onLogin={() => setIsLoggedIn(true)} />
          ) : (
            <Redirect to="/todos" />
          )}
        </Route>
        <Route path="/register">
          {!isLoggedIn ? <Register /> : <Redirect to="/todos" />}
        </Route>
        <Route path="/todos">
          {isLoggedIn ? (
            <div className="main-container">
              <img
                src={process.env.PUBLIC_URL + "/icons8-todo-list-100.png"}
                alt="Logo"
                className="app-logo"
              />
              <h1>My To-Do List</h1>
              <button className="logout" onClick={handleLogout}>
                Logout
              </button>
              <div>
                <input
                  className="add-todo-input"
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="add-todo" onClick={addToDo}>
                  Add
                </button>
              </div>
              {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} onDelete={removeTodo} />
              ))}
            </div>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
