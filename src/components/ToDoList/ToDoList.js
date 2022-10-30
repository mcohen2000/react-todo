import React, { useState, useEffect } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";

const ToDoList = () => {
  const [taskList, setTaskList] = useState([]);
  const [key, setKey] = useState(0);
  const [task, setTask] = useState({});
  const newTask = {
    text: "",
    key: key,
  };
  // const updateTask = () => {
  // };
  const handleTask = (str) => {
    newTask.text = str;
    setTask(newTask);
  };
  const submitTask = (task) => {
    setTaskList([...taskList, task]);
    setKey(key + 1);
  };
  useEffect(() => {
    console.log(taskList, key);
  });
  return (
    <ul className="list">
      {taskList.map((item, index) => (
        <ToDoItem task={item} key={index} id={index}/>
      ))}
      <div className="addItem">
        <input
          type="text"
          placeholder="Type your task here..."
          onChange={(e) => handleTask(e.target.value)}
        ></input>
        <button
          onClick={() => {
            submitTask(task);
          }}
        >
          Add Task +
        </button>
      </div>
    </ul>
  );
};

export default ToDoList;
