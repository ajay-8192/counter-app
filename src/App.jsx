import React from "react";
import ClassCounter from "./components/ClassCounter";
import FunctionCounter from "./components/FunctionCounter";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="main-heading">Assignment-2 Counter Application</h1>

      <div className="counter-row">
        <ClassCounter />
        <FunctionCounter />
      </div>
    </div>
  );
};

export default App;
