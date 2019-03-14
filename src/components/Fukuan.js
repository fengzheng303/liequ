import React from "react";
import $ from "jquery";
import '../css/Fukuan.css';

import { InputNumber,Button, Radio } from 'antd';
import {NavLink,Route,BrowserRouter as Router} from "react-router-dom";
class Fukuan extends React.Component{
		constructor(props){
		super(props)
		this.state={
			list:[],
			checkall:false,
			zong:0
		}
	}
	
	zong(){
		var zong = 0;
		this.state.list.map((item,i)=>{
		
			zong+=item.pprice*item.pnum
		
		})
		return zong;

	}
	jiesuan(){
		var zong1=parseInt(this.zong);
		console.log(zong1);
		alert('支付完成')
	}
	
	
	changeitem(i){
		var list1 = this.state.list;
		
		list1[i].selected=!list1[i].selected
	
		this.setState({list:list1},function(){
			var sel = this.state.list.filter(function(item){
			return item.selected==true
		})
		sel.length==this.state.list.length ? this.setState({checkall:true}) : this.setState({checkall:false})
		})
		
	}
	
	render(){
		return(
		<div className='fukuan'>
		<div className='fukuan1'>
			{
				
				this.state.list.map((item,i)=>{
					console.log(item.selected)
					
					return(
					<div key={i} className='dingdan'>
					<input className='dx' type="checkbox" checked={item.selected} onChange={this.changeitem.bind(this,i)}/>

					<img src={item.pimg}/>
					
					<p>{item.pdesc}</p><br/>
					<h3>￥{item.pprice}</h3>
				数量:<p>{item.pnum} </p>

			      
					</div>
					)
					
				})
				
			}
			</div>
		<div className='fukuan2'>
			<div className='zong'>总价:{this.zong.bind(this)()}</div>
			<NavLink to='/fukuan'><Button className='jiesuan1' type="danger" onClick={this.jiesuan.bind(this)}>提交订单</Button>
</NavLink>
</div>
		</div>
		
		)
	}
	componentDidMount(){
		
		var _this=this;
		$.ajax({
			url:'http://jx.xuzhixiang.top/ap/api/cart-list.php',
			data:{
				id:1128
			},
			async:true,
			dataType:"json",
			success:function(data){
				console.log(data.data)
				var arr=[];
				data.data.map(function(item,i){
					item.selected=false;
					arr.push(item)
				})
				
				
				_this.setState({list:arr})
			}
			
		})
			
	}
	
	
}
export default Fukuan;