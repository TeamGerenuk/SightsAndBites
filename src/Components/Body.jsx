import React, { Component } from "react";
import axios from "axios";

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
    event.preventDefault();
    //do the api calls here
    const config = {
      headers: {
        Authorization:
          "Bearer Y4NDfjO891ERjcyaIa2z7Q2pjAjqtBcYoU7XLWpXZotV2EtOd3ZH5CrsCCrSgLEJN6FkHZEXbfCJdEWBuyVDY7u6KyvL0osIsgLPdjVPKX4aIgdF8xKYWecaj_J9WnYx"
      }
    };
    axios
      .get(
        "https://api.yelp.com/v3/businesses/search?location=%" +
          this.state.city +
          "&categories=Food&sort_by=rating",
        config
      )
      .then(function(response) {
        console.log("response", response);
      })
      .catch(function(err) {
        console.log("err", err);
      });
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
