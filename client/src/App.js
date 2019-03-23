import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Admin from './Admin/Admin'
import SubApp from './SubApp/SubApp'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route  exact path='/' component={SubApp}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
      </div>
    );
  }
}

export default App;
