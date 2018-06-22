import React, { Component } from 'react';	
import ReactDOM from 'react-dom';	 	
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';	
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';	
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './Components/App.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers/index.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>	
        <App /> 	
    </MuiThemeProvider>
    </Provider> , document.querySelector('.container'));

