import React from "react";
import "./ToDoItem.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function ToDoItem({
  task,
  index,
  handleDelete,
  updateText,
  handleComplete,
  editing,
  setEditing,
}) {
  return (
    <li
      className={`listItem task${task.id} ${task.completed ? "complete" : ""}`}
    >
      {editing===index ? (
        
          <input
            className="editingTaskInput"
            defaultValue={task.text}
            onKeyUp={(e) => {
              if (e.key === 'Enter'){
                updateText(task.id, e.target.value);
                setEditing(-1);
              }
            }}
            onBlur={(e) => {
              updateText(task.id, e.target.value);
              setEditing(-1);
            }}
          ></input>
      
      ) : (
        <p onClick={() => setEditing(index)}>{task.text}</p>
      )}
      <button
        className="completeItemButton"
        onClick={() => handleComplete(task.id)}
      >
        <FaCheckCircle className="completeIcon" />
      </button>
      <button
        className="deleteItemButton"
        onClick={() => handleDelete(task.id)}
      >
        <FaTimesCircle className="deleteIcon" />
      </button>
    </li>
  );
}
