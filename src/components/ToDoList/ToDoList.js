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
    completed: false,
  };
  const updateTask = (id) => {
    const newList = [...taskList];
    console.log("UPDATE TASK:", newList[id].text);
    newList.forEach((item) => {
      if (item.id === id) {
        item.text = task.text;
      }
    });
    setTaskList(newList);
    document.getElementById("newTaskInput").value = "";
  };
  const handleComplete = (id) => {
    const newList = [...taskList];
    console.log("UPDATE TASK:", newList[id].text);
    newList.forEach((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    });
    console.log("UPDATED TASK!!!!", newList);
    setTaskList(newList);
    
  };
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
    document.getElementById("newTaskInput").value = "";
    newTask.text = "";
  };
  useEffect(() => {
    console.log(taskList);
  }, [taskList]);
  return (
    <ul className="list">
      {taskList.map((item, index) => (
        <ToDoItem
          task={item}
          key={index}
          id={index}
          handleDelete={handleDelete}
          updateTask={updateTask}
          handleComplete={handleComplete}
        />
      ))}
      <div className="addItem">
        <input
          id="newTaskInput"
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
