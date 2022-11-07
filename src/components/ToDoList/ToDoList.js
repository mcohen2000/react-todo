import React, { useState, useEffect } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";

export default function ToDoList() {
  const [taskList, setTaskList] = useState([]);
  const [key, setKey] = useState(0);
  const [task, setTask] = useState({});
  const newTask = {
    text: "",
    id: taskList.length,
    key: taskList.length,
  };
  // const updateTask = () => {
  // };
  const handleTask = (str) => {
    newTask.text = str;
    setTask(newTask);
  };
  const handleDelete = (id) => {
    console.log(id);
    const newList = taskList.filter((task) => task.id !== id);
    newList.map((item, index) => {
      item.id = index;
      item.key = index;
    });
    console.log("newList!!", newList);
    setTaskList(newList);
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
        <ToDoItem task={item} key={index} id={index} handleDelete={handleDelete} />
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
}
