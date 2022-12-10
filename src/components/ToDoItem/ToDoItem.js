import React from "react";
import "./ToDoItem.css";

export default function ToDoItem({
  task,
  handleDelete,
  updateText,
  handleComplete,
  editing,
  setEditing
}) {
  return (
    <li className={`listItem task${task.id} ${task.completed ? "complete" : ""}`}>
      {editing ? <input defaultValue={task.text} onBlur={(e) => {
        updateText(task.id, e.target.value)
        setEditing(false)
        }}></input> : <p onClick={() => setEditing(true)}>{task.text}</p>}
      <button onClick={() => handleComplete(task.id)}>Completed</button>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </li>
  );
}
