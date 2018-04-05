import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>{this.props.message}</h2>
        </div>
      </div>
    );
  }
}
