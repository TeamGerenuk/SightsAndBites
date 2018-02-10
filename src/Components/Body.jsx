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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ city: event.target.value });
  }

  handleSubmit(event) {
    //do the api calls here

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Search
          city={this.state.city}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Results />
        <Results />
      </div>
    );
  }
}
