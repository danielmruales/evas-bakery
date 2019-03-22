import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
<<<<<<< HEAD
import Home from './Home/Home'
=======
// import Home from './Home/Home'
>>>>>>> 8dfad6947277217fc0a3458358fa81fbd009bfca
// import Menu from './Menu/Menu'
import Catering from './Catering/Catering'
// import About from './About/About'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
          <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              {/* <Route path='/menu' component={Menu}/> */}
              <Route path='/catering' component={Catering}/>
              {/* <Route path='/about' component={About}/> */}
            </Switch>
=======
        <Navbar/>
          <Switch>
            {/* <Route exact path='/' component={Home}/>
            <Route path='/menu' component={Menu}/> */}
            <Route path='/catering' component={Catering}/>
            {/* <Route path='/about' component={About}/> */}
          </Switch>
>>>>>>> 8dfad6947277217fc0a3458358fa81fbd009bfca
          {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
