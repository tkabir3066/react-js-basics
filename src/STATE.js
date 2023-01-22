import React, { Component } from "react";
import Button from "react-bootstrap/Button";
export default class STATE extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h3>
          <b>Count</b>: {this.state.count}
        </h3>
        <Button
          className="btn btn-success m-1 px-4"
          onClick={this.handleIncrement}
          disabled={this.state.count === 5 ? true : false}
        >
          +
        </Button>
        <Button
          className="btn btn-success m-1 px-4"
          onClick={this.handleDecrement}
          disabled={this.state.count === 0 ? true : false}
        >
          -
        </Button>
      </div>
    );
  }
}
