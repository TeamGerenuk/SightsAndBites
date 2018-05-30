
import React, {Component} from 'react';
import axios from 'axios';
import Center from 'react-center';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RaisedButton from 'material-ui/RaisedButton';
import { grey900, white, blue500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Search = (props) => {
            return (
            <div>
            {/* <h1>{props.city}</h1> */}
            <Center>
            {/* <RaisedButton
              label="Submit"
              labelColor={grey900}
              backgroundColor={blue500}
              style={{
                margin: 14,
              }}
              onClick={event => props.handleSubmit(event)}/>  */}
            <form onSubmit={event => props.handleSubmit(event)}>
            <input 
                value={props.city}
                onChange={event => props.onInputChange(event.target.value)}/>
            </form>
            </Center>
            </div>
        )
    }


export default Search;