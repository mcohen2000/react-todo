import React from "react";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  const task = props.task;
  const id = props.id;
  return (
    <li className="listItem">
      <input type="text" defaultValue={task.text}></input>
      <button>Update Text</button>
      <button>Completed</button>
      <button>Delete</button>
      <button>KEY = {id}</button>
    </li>
  );
};

export default ToDoItem;
