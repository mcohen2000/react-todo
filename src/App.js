import "./App.css";
import React from "react";
import ToDoList from "./components/ToDoList/ToDoList";


function App() {
  return (
    <div className="App">
      <div className="Lists">
      <ToDoList></ToDoList>
      {/* <ToDoList></ToDoList> */}

      </div>
    </div>
  );
}

export default App;
