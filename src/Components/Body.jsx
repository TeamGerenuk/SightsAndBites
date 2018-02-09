import React, { Component } from "react";
import Search from "../Components/Search";
import Results from "../Components/Results";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      sites: {},
      bites: {}
    };
  }

  render() {
    return (
      <div>
        <Search city="this.state.city" />
        <Results />
        <Results />
      </div>
    );
  }
}
