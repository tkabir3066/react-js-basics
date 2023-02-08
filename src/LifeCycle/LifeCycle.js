import React, { Component } from "react";

// Mounting -> constructor -> render ->componentDidMount
// Updating -> state/props -> render ->
class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        {console.log("render")}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default LifeCycle;
