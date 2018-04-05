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

<<<<<<< HEAD
      axios
        .post(
          "https://api.yelp.com/v3/businesses/search?location=%" +
            this.state.city +
            "&categories=Food&sort_by=rating",
          {
            headers: {
              Authorization:
                "Bearer Y4NDfjO891ERjcyaIa2z7Q2pjAjqtBcYoU7XLWpXZotV2EtOd3ZH5CrsCCrSgLEJN6FkHZEXbfCJdEWBuyVDY7u6KyvL0osIsgLPdjVPKX4aIgdF8xKYWecaj_J9WnYx"
            }
          }
        )
        .then(function(response) {
          console.log("response", response);
        })
        .catch(function(err) {
          console.log("err", err);
        });
    }
  //   axios
  //     .get(
  //       "https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+in+" +
  //         this.state.city +
  //         "&key=AIzaSyCX9EPP7EsRb9xbWmupveSgdW2l_AJ9JGU",
  //       {
  //         mode: "no-cors",
  //         header: {
  //           "Access-Control-Allow-Orgin": "http://localhost:3000",
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Headers":
  //             "Origin, X-Requested-With, Content-Type, Accept"
  //         },
  //         withCredentials: true,
  //         credentials: "same-origin"
  //       }
  //     )
  //     .then(function(response) {
  //       console.log("response", response);
  //       this.setState({ sights: response.data.results });
  //       // this.updateSights(response);
  //     })
  //     .catch(function(err) {
  //       console.log("err", err);
  //     });
  // }
=======
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
>>>>>>> 07207948833b844b86e922711afc06e80f6808b1

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
