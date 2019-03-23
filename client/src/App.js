import React, { Component } from 'react';
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Menu from './Menu/Menu'
import Catering from './Catering/Catering'
// import About from './About/About'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
        <Menu/>
        <Catering/>
      </div>
    );
  }
}

export default App;
