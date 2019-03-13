import React, { Component } from 'react';

import {HashRouter as Router ,Route,Redirect,Switch,NavLink} from 'react-router-dom';

import Index from './Components/Index/Index';
import List from './Components/Index/List';
import Elist from './Components/Index/Elist';





import Login from './Components/Login/login';
import Shou from './Components/Login/Shou';





import Wo from './Components/Index/Wo';
import Sou from './Components/Index/Sou';
import Lreight from './Components/Index/Lreight';


import Sg from './Components/Wo/Sg';
import Sgz from './Components/Wo/Sgz';
import Sgx from './Components/Wo/Sgx';


import GWC from './Components/Wo/GWC';
import Mc from './Components/Wo/Mc';
import Tk from './Components/Wo/Tk';
import WZ from './Components/Wo/WZ';








import './css/loading.css';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
<div id='loader'></div>

        <Router>
          <div>
           
          <Switch>
          <Route path='/login' component={Login}></Route>
          <Route   path='/shou' component={Shou}></Route>
               
          <Route   path='/wo' component={Wo}></Route>
          <Route   path='/sg' component={Sg}></Route>
          <Route   path='/sgz' component={Sgz}></Route>
          <Route   path='/sgx' component={Sgx}></Route>
          <Route   path='/gwc' component={GWC}></Route>
          <Route   path='/mc' component={Mc}></Route>
          <Route   path='/tk' component={Tk}></Route>
          <Route   path='/wz' component={WZ}></Route>

            <Route  path='/sou' component={Sou}></Route>
            <Route path='/index' component={Index}></Route>
            <Route   path='/list' component={List}> </Route>
            <Route path='/reight/:id' component={ Lreight }></Route>

            <Route   path='/elist/:id' component={Elist}></Route>
         
          <Redirect to='/index'/>
          </Switch>
         
          </div>
        </Router>
       
      </div>
    );
  }
}

export default App;
