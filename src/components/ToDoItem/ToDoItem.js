import React from "react";
import "./ToDoItem.css";

export default function ToDoItem({
  task,
  handleDelete,
  updateTask,
  handleComplete,
}) {
  return (
    <li className={`listItem task${task.id} ${task.completed ? "complete" : ""}`}>
      <p>{task.text}</p>
      <button onClick={() => updateTask(task.id)}>Update Text</button>
      <button onClick={() => handleComplete(task.id)}>Completed</button>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </li>
  );
}
