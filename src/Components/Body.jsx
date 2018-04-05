import React, { Component } from "react";
import axios from "axios";

import Search from "../Components/Search";
import ResultContainer from "../Components/ResultContainer";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      sights: {},
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

    //making ajax request to google's places api
    axios
      .get(
        "https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+in+" +
          this.state.city +
          "&key=AIzaSyCX9EPP7EsRb9xbWmupveSgdW2l_AJ9JGU",
        {
          mode: "no-cors",
          header: {
            "Access-Control-Allow-Orgin": "http://localhost:3000",
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept"
          },
          withCredentials: true,
          credentials: "same-origin"
        }
      )
      .then(response => {
        this.setState({ sights: response.data.results });
      })
      .catch(function(err) {
        console.log("err", err);
      });


      axios
        .post(
          "api/google",
          {
            sights: this.state.city
          }
        ).then(response =>{
          console.log(response);
        })

  }

  render() {
    return (
      <div>
        <Search
          city={this.state.city}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <resultContain sights= {this.state.sights}/>
        <resultContain />

      </div>
    );
  }
}
