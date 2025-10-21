import React, { Component } from "react";
import "./Counter.css";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="counter-card">
        <h2 className="counter-heading">Class Component</h2>
        <div className="counter-value">{this.state.count}</div>
        <div className="button-group">
          <button className="btn decrement" onClick={this.decrement}>
            -
          </button>
          <button className="btn increment" onClick={this.increment}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
