import React from 'react';
import Index from './Index';

import Wo from './Wo';
import '../../css/footer.css'


import {
    BrowserRouter as Router,
    Route,
    
    NavLink,
    Redirect,
    Switch
} from 'react-router-dom';
import '../../css/footer.css';
class Footer extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return ( <div  >
                   
                <Router >
                    <div className="foot">
                        <div className='ft'>
                        <Switch>
                            <Route path="/index" component={Index}></Route>
                            <Route path="/wo" component={Wo}></Route>

                            <Redirect to="/index"/>
                        </Switch>
                        </div>
                        <footer>
                        <NavLink to='/index'>
                            <i>1</i>
                            <span>首页</span>
                        </NavLink> 
                        <NavLink to='/wo'>
                            <i>1</i>
                            <span>我的</span>
                        </NavLink>          
                        </footer>
                    </div>
                </Router>
            </div>

           
        )
    }

}

export default Footer;