import React, { Component } from 'react';	
import ReactDOM from 'react-dom';	 
import Center from 'react-center';	
	 
	 
	
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';	
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';	
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './Components/App.jsx';


ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>	
    <Center>	
    <App /> 	
    </Center>	
    </MuiThemeProvider>, document.querySelector('.container'));

