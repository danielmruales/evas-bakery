import React, { Component } from 'react';
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Catering from './Catering/Catering'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home/>
        <Catering/>
      </div>
    );
  }
}

export default App;
