import React, { Component } from "react";
import Body from "./Components/Body";
import "./App.css";

import Header from "./Components/Header";

//sights and bites updating
class App extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    fetch("/api/message")
      .then(response => response.json())
      .then(json => this.setState({ message: json }));


  }

  render() {
    return (
      <div>
        <Header message={this.state.message} />
        <Body />
      </div>
    );
  }
}

export default App;
