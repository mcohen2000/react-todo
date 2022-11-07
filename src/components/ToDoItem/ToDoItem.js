import React from "react";
import "./ToDoItem.css";

export default function ToDoItem({task, id, handleDelete}) {
  return (
    <li className="listItem">
      <input type="text" defaultValue={task.text} value={task.text}></input>
      <p>REAL TEXT: {task.text}</p>
      <button>Update Text</button>
      <button>Completed</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button>KEY = {id}</button>
    </li>
  );
}
