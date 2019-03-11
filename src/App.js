import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Login from './Components/Login/login';
import Shou from './Components/Login/Shou';
import Index from './Components/Index/Index';
import Footer from './Components/Index/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
     
        <Router>
          <div>
            <Switch>
            <Route path="/shou" component={Shou}></Route>
            <Route path="/footer" component={Footer}></Route>

            <Route path="/login" component={Login}></Route>
<Redirect to='/footer'/>
</Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
