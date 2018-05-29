import React, {Component} from 'react';
import axios from 'axios';
import Center from 'react-center';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RaisedButton from 'material-ui/RaisedButton';
import { grey900, white, blue500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Search extends Component {
    constructor(props) {
        super(props);

        this.state= {
            city:'',//the value of our input field where the user types
            sights:[] //what we get back from our request when we handleSubmit.
        }
    }

    onInputChange(city) {
        this.setState({city}); //sets the new value of our input field (gets called in our input field element onChange(so when a user types 
        // in our input, our city will update as the user is typing))
    }


        handleSubmit(e) {
        
            e.preventDefault();
            axios.get(
                    "https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+in+" +
                    this.state.city +
                    "&key=AIzaSyAuLEO4q3qEIub-ez0kc4QxWW9sHR70kFU",
                            {
                            mode: "no-cors",
                            header: {
                                "Access-Control-Allow-Orgin": "http://localhost:8080",
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Headers":
                                "Origin, X-Requested-With, Content-Type, Accept"
                            },
                            withCredentials: true,
                            credentials: "same-origin"
                            }
                        )
                        .then(function(res) { 
                            console.log(res); 
                            return res })
                        .then((res) => {
                            this.setState({ sights: res.data.results[0]['name']});
                        })
                        .then(console.log(this.state.sights))
                        // .then(console.log(this.state.sights))
                        .then()
                        .catch(function(err) {
                            console.log("err", err);
                        });
            }

    render(){
        // const sights=this.state.sight !== [] ? 
        return (
            <div>
           
            <h1>{this.state.city}</h1>
            <Center>
            <RaisedButton
              label="Submit"
              labelColor={grey900}
              backgroundColor={blue500}
              style={{
                margin: 14,
              }}
              onClick={event => this.handleSubmit(event)}/>
            <form onSubmit={event => this.handleSubmit(event)}> 
            <input 
                value={this.state.city}
                onChange={event =>this.onInputChange(event.target.value)}/>
            </form>
            <h3>{this.state.sights}</h3>
            </Center>
            </div>
        )
    }
}

export default Search;