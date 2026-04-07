import React, { Component } from "react";

class ClassDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to Sclar Dynamics"
    };
  }

  render() {
    return <h2>{this.state.message}</h2>;
  }
}

export default ClassDemo;