import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log("changing");
  }

  handleSubmit(event) {
    console.log("submitted", event.target.value);
    this.setState({ city: this.state.value });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
