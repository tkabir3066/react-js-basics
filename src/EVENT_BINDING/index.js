import React, { Component } from "react";
import Button from "react-bootstrap/Button";
class EVENT_BINDING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <Button className="px-1" onClick={this.handleClick}>
          Increase
        </Button>
      </div>
    );
  }
}

export default EVENT_BINDING;
