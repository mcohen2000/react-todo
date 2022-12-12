import React from "react";
import "./ToDoItem.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

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
      {editing ? <input className="editingTaskInput" defaultValue={task.text} onBlur={(e) => {
        updateText(task.id, e.target.value)
        setEditing(false)
        }}></input> : <p onClick={() => setEditing(true)}>{task.text}</p>}
      <button className="completeItemButton" onClick={() => handleComplete(task.id)}><FaCheckCircle className="completeIcon"/></button>
      <button className="deleteItemButton" onClick={() => handleDelete(task.id)}><FaTimesCircle className="deleteIcon"/></button>
    </li>
  );
}
