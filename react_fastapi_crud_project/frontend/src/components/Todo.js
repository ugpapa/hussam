import React from "react";
import { useState } from "react";

function Todo({ todo, onDelete }) {
  const [isChecked, setIsChecked] = useState(todo.completed);

  const handleIsChecked = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);

    // Update the completed status in the database
    fetch(`http://127.0.0.1:8000/todos/${todo.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: newIsChecked }),
    });
  };

  const handleDelete = () => {
    fetch(`http://127.0.0.1:8000/todos/${todo.id}/`, {
      method: "DELETE",
    }).then(() => {
      onDelete(todo.id);
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
