import React from "react";
import { useState } from "react";

function Todo({ todo, onDelete }) {
  const [isChecked, setIsChecked] = useState(todo.completed);

  const handleIsChecked = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);

    fetch(`http://127.0.0.1:8000/todos/${todo.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ completed: newIsChecked }),
    }).catch((error) => {
      console.error("Error updating todo:", error);
      // Handle the error, e.g., redirect to login if token is expired
    });
  };

  const handleDelete = () => {
    fetch(`http://127.0.0.1:8000/todos/${todo.id}/`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
      },
    })
    .then(() => {
      onDelete(todo.id);
    })
    .catch((error) => {
      console.error("Error deleting todo:", error);
      // Handle the error
    });
  };

  return (
    <div className="todo">
      <input type="checkbox" checked={isChecked} onChange={handleIsChecked} />
      <span style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {todo.task}
      </span>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
