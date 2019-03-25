import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Admin from './Admin/Admin'
import SubApp from './SubApp/SubApp'
import Catering from './Admin/CheckCatering'
import EditMenus from './Admin/EditMenus';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={SubApp}/>
          <Route path='/admin' component={Admin}/>
          <Route path ='/catering' component={Catering}/>
          <Route path ='/editmenu' component={EditMenus}/>
        </Switch>
      </div>
    );
  }
}

export default App;
