import React from "react";
import { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

function Todo({ todo, onDelete }) {
  const [isChecked, setIsChecked] = useState(todo.completed);

  const handleIsChecked = () => {
    setIsChecked(!isChecked);
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
