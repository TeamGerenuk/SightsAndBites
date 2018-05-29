import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Center from 'react-center';
import Header from './Components/Header.jsx';
import axios from 'axios';
import Search from './Components/Search.jsx';
import PlacesList from './Components/PlacesList.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
   constructor(props){
       super(props);

       this.state = {}
   }

   render(){
       return (
           <Center>
           <div>
               <h2>{this.state.city}</h2>
               <Header message={this.state.message} />
               <Search /> 
           </div>
           </Center>
       );
   }
}

ReactDOM.render(
<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
<Center>
    <App /> 
    </Center>
    </MuiThemeProvider>,
    document.querySelector('.container')
);

