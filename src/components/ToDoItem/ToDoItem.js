import React from "react";
import "./ToDoItem.css";

export default function ToDoItem({
  task,
  id,
  handleDelete,
  updateTask,
  handleComplete,
}) {
  return (
    <li className={`listItem task${id} ${task.completed ? "complete" : ""}`}>
      <input type="text" value={task.text}></input>
      <p>REAL TEXT: {task.text}</p>
      <button onClick={() => updateTask(id)}>Update Text</button>
      <button onClick={() => handleComplete(id)}>Completed</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button>KEY = {id}</button>
    </li>
  );
}
