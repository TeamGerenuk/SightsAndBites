import React, { Component } from "react";
import axios from "axios";

import Search from "../Components/Search";
import Results from "../Components/Results";

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

  // updateSights(response) {
  //   this.setState({ sights: response.data.results });
  // }

  handleChange(event) {
    this.setState({ city: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // do the api calls here

    //   axios
    //     .get(
    //       "https://api.yelp.com/v3/businesses/search?location=%" +
    //         this.state.city +
    //         "&categories=Food&sort_by=rating",
    //       {
    //         headers: {
    //           Authorization:
    //             "Bearer Y4NDfjO891ERjcyaIa2z7Q2pjAjqtBcYoU7XLWpXZotV2EtOd3ZH5CrsCCrSgLEJN6FkHZEXbfCJdEWBuyVDY7u6KyvL0osIsgLPdjVPKX4aIgdF8xKYWecaj_J9WnYx"
    //         }
    //       }
    //     )
    //     .then(function(response) {
    //       console.log("response", response);
    //     })
    //     .catch(function(err) {
    //       console.log("err", err);
    //     });
    // }
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
      .then(response =>{
        console.log("response", response);
        return this.setState({ sights: response.data.results });
        // this.updateSights(response);
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
