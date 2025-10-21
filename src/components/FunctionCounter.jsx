import React, { useState } from "react";
import "./Counter.css";

const FunctionCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="counter-card">
      <h2 className="counter-heading">Function Component</h2>
      <div className="counter-value">{count}</div>
      <div className="button-group">
        <button className="btn decrement" onClick={decrement}>
          -
        </button>
        <button className="btn increment" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default FunctionCounter;
