import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Admin from './Admin/Admin'
// import Menu from './Menu/Menu'
import Catering from './Catering/Catering'
// import About from './About/About'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/admin' component={Admin}/>
          </Switch>
          <Navbar/>
          <Home/>
          <Catering/>
      </div>
    );
  }
}

export default App;
