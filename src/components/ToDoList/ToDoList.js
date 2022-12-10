import React, { useState, useEffect } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";

export default function ToDoList({ uid, list, lists, setLists }) {
  const [task, setTask] = useState({});
  const [editing, setEditing] = useState(false);
  const newTask = {
    text: "",
    id: list.tasks.length,
    completed: false,
  };
  const updateLists = (listName, listObj) => {
    const newLists = [...lists];
    newLists[uid] = { name: listName, tasks: listObj };

    setLists(newLists);
  };
  const updateText = (id, text) => {
    const newList = [...list.tasks];
    newList.forEach((item) => {
      if (item.id === id) {
        item.text = text;
      }
    });
    updateLists(list.name, newList);
    document.getElementById("newTaskInput").value = "";
  };
  const handleComplete = (id) => {
    const newList = [...list.tasks];
    newList.forEach((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    });
    updateLists(list.name, newList);
  };
  const handleTask = (str) => {
    newTask.text = str;
    setTask(newTask);
  };

  const handleDelete = (id) => {
    // make a copy of state without deleted item
    const newList = list.tasks.filter((task) => task.id !== id);
    //update ids
    newList.forEach((item, index) => {
      item.id = index;
    });
    updateLists(list.name, newList);
  };
  const submitTask = (task) => {
    const newList = [...list.tasks, task];
    updateLists(list.name, newList);
    document.getElementById("newTaskInput").value = "";
    newTask.text = "";
  };
  const handleListName = (text) => {
    updateLists(text, list.tasks);
    document.getElementById("newTaskInput").value = "";
    newTask.text = "";
  };

  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <div className="list-wrapper">
      <h3>
        <input
          id="listName"
          type="text"
          value={list.name}
          onChange={(e) => handleListName(e.target.value)}
        ></input>
        <button
          onClick={() => {
            const newLists = [...lists];
            newLists.splice(uid, 1);
            setLists(newLists);
          }}
        >
          X
        </button>
      </h3>

      <ul className="list">
        {list.tasks.map((item, index) => (
          <ToDoItem
            task={item}
            key={index}
            handleDelete={handleDelete}
            updateText={updateText}
            handleComplete={handleComplete}
            editing={editing}
            setEditing={setEditing}
          />
        ))}
        <form
          className="addItem"
          onSubmit={(e) => {
            e.preventDefault();
            submitTask(task);
          }}
        >
          <input
            id="newTaskInput"
            type="text"
            placeholder="Type your task here..."
            onChange={(e) => handleTask(e.target.value)}
          ></input>
          <button type="submit">Add Task +</button>
        </form>
      </ul>
    </div>
  );
}
