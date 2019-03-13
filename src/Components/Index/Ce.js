import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Redirect,Switch,NavLink} from 'react-router-dom';
import Login from '../Login/login';
import Shou from '../Login/Shou';
import Index from './Index';
import List from './List';
import Wo from './Wo';
import Sou from './Sou';





import She from '../Wo/She';



// import '../App.css';

class Ce extends Component {
  render() {
    return (
      <div className="App">
     
        <Router>
         <div>
    
         <Route path="/she" component={She}></Route>
          <div className='rong'> 
          
            <div className="t">
            <Switch>
     
            <Route path="/sou" component={Sou}></Route>
          
                <Route path="/login" component={Login}></Route>
                <Route path="/shou" component={Shou}></Route>
                <Route path="/index" component={Index}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/wo" component={ Wo}></Route>
             
                <Redirect to="/index"/>
        
            
          </Switch>
          </div>
          <footer className="f">
            <NavLink to='/index'>
                首页
            </NavLink>
            <NavLink to='/list'>
                列表
            </NavLink>
            
            <NavLink to='/login'>
                登陆
            </NavLink>
            <NavLink to='/wo'>
                我的
            </NavLink>          
        </footer>
          </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Ce;
