import React, { Component } from 'react';
import {NavLink,Route,BrowserRouter as Router,Redirect,Switch} from "react-router-dom";

import './App.css';

import './iconfont/iconfont.css'
//import '../js/iscroll.js';
import './css/loading.css';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';

import Home from "./components/Home";
import Fujin from "./components/Fujin";
import About from "./components/About";
import Login from "./components/Login";
import Regist from "./components/Regist";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
//import Fukuan from "./components/Fukuan";
import Fabu from "./components/Fabu";
import {Input  } from 'antd';

const Search = Input.Search;

class App extends Component {
		
	back(){
		window.history.go(-1);
	}

render() {
return (
<div className="App">
<header>	
    <div onClick={this.back.bind(this)}>上一页</div>
	<Search  placeholder="搜索" onSearch={value => console.log(value)}style={{ width: 300 }} /> 
<div id="loader">请稍等</div>
</header>
<section>
	<Router>
	 <div>
	<NavLink to='/cart' className='gouwuche'><i className='iconfont icon-gouwuche'></i></NavLink>
			{/*<NavLink to='/home'>首页</NavLink>
			 <NavLink to='/about'>关于</NavLink>*/} 
		<Switch>
			<Route path='/home' component={Home}></Route>
			<Route path='/detail/:id' component={Detail}></Route>
			 <Route path='/cart' component={Cart}></Route>
			<Route path='/login' component={Login}></Route>
			<Route path='/regist' component={Regist}></Route>
			<Route path='/fujin' component={Fujin}></Route>

			{/*<Route path='/fukuan' component={Fukuan}></Route>*/}
			<Route path='/fabu' component={Fabu}></Route>

//<Route path='/about' component={About}></Route>
			 <Redirect to='/login'/>
		</Switch>
	 </div>
	</Router>
</section>		

</div>
    );
  }
}

export default App;
