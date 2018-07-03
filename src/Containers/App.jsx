import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from '../Components/Search.jsx';	
import PlacesList from '../Components/PlacesList.jsx';
import Header from '../Components/Header.jsx';
import axios from 'axios';
import Center from 'react-center';	
import getPlaces from '../Actions/index.js';

//we want to import our sights here with redux



class App extends Component {
   
    constructor(props){
        super(props);
 
        this.state = {
            message:'Sights and Bites',
            sights:[{name:'',
                     formatted_address:''}],
            city:''
        };
 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.responseSights = this.responseSights.bind(this);
    }
 
 onInputChange(city) {
     this.setState({city}); //sets the new value of our input field (gets called in our input field element onChange(so when a user types 
     // in our input, our city will update as the user is typing))
 }
 responseSights(sights) {
     this.setState({sights});
 }
    
 handleSubmit(e) {
         
     e.preventDefault();

     this.props.getPlaces(this.state.city);
     this.setState(city);
    //  axios.get(
    //          "https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+in+" +
    //          this.state.city +
    //          "&key=AIzaSyAuLEO4q3qEIub-ez0kc4QxWW9sHR70kFU",
    //                  {
    //                  mode: "no-cors",
    //                  header: {
    //                      "Access-Control-Allow-Orgin": "http://localhost:8080",
    //                      "Content-Type": "application/json",
    //                      "Access-Control-Allow-Headers":
    //                      "Origin, X-Requested-With, Content-Type, Accept"
    //                  },
    //                  withCredentials: true,
    //                  credentials: "same-origin"
    //                  }
    //              )
    //              // .then(function(res) { 
    //              //     console.log(res.data.results[0]); 
    //              //     return res })
    //              // .then(function(res) {
    //              //     console.log(res.data.results[0]);
    //              //     return res;
    //              // })
    //              .then((res) => {
    //                  this.setState({ sights: res.data.results});
    //              })
    //              .then(console.log(this.state.sights))
    //              // .then(console.log(this.state.sights))
    //              .then()
    //              .catch(function(err) {
    //                  console.log("err", err);
    //              });
     }
 
 
 
    render(){
     
        return (
            <Center>
            <div>
                <Header message={this.state.message} />
                <Search handleSubmit={this.handleSubmit} onInputChange={this.onInputChange}/>
                <PlacesList sights={this.state.sights} />
                <h3></h3>
            </div>
            </Center>
        );
    }
 }

 
function mapStateToProps({PLACES}) {
    return 
        {PLACES}
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators( { getPlaces }, dispatch)
   
}

 export default connect(null, mapDispatchToProps, mapStateToProps)(App);