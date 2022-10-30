import "./App.css";
import React from "react";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      {/* <ToDoList tasks={tasks}></ToDoList> */}
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
