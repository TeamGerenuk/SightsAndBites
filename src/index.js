import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Center from 'react-center';
import Header from './Components/Header.jsx';
import axios from 'axios';
import Search from './Components/Search.jsx';
import PlacesList from './Components/PlacesList.jsx';

class App extends Component {
   constructor(props){
       super(props);

       this.state = {
           message:'Sights and Bites'
       }
   }

   
   render(){
       return (
           <div>
               <h2>{this.state.city}</h2>
               <Header message={this.state.message} />
               <Search /> 
           </div>
       );
   }
}

ReactDOM.render(<Center>
    <App /> 
    </Center>
    , document.querySelector('.container')
);

