import React from "react";
import '../css/Login.css';
import {NavLink} from "react-router-dom";
class Login extends React.Component{
	render(){
		return(
		<div>
			<h2>login</h2>
			
			
			
			<footer>
				<div>
				<NavLink to='/home'>
				<i className='iconfont icon-icon-test'></i>
				<span>首页</span>
				</NavLink>
				</div>
				<div><NavLink to='/home'>
				<i className='iconfont icon-fenlei'></i>
				<span>分类</span></NavLink>
				</div>
				<div><NavLink to='/home'>
				<i className='iconfont icon-xiangji'></i>
				<span>发布</span></NavLink>
				</div>
				<div><NavLink to='/home'>
				<i className='iconfont icon-xiaoxi'></i>
				<span>消息</span></NavLink>
				</div>
				<div><NavLink to='/home'>
				<i className='iconfont icon-wo01'></i>
				<span>我</span></NavLink>
				</div>
			</footer>
		</div>
		
		)
	}
	
}
export default Login;