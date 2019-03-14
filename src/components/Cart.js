	import React from "react";
import $ from "jquery";
import '../css/Cart.css';

import { InputNumber,Button } from 'antd';
import {NavLink} from "react-router-dom";
class Cart extends React.Component{
		constructor(props){
		super(props)
		this.state={
			list:[],
			checkall:false,
			zong:0
		}
	}
	
	del(id,i){
		var _this=this;
		$.ajax({
			type:'get',
			url:'http://jx.xuzhixiang.top/ap/api/cart-delete.php',
			async:true,
			dataType:'json',
			data:{uid:1128,pid:id},
			success:function(data){
				alert(data.msg)
				console.log(data)
				var arr1 =_this.state.list;
				arr1.splice(i,1);
				_this.setState({list:arr1})
				
			}
		})
	}
	checkchange(){
		if(this.state.checkall){
			this.setState({checkall:false})
		}else{
			this.setState({checkall:true})
		}
		var _this=this;
		this.state.list.map((item,i)=>{
			item.selected=!_this.state.checkall
		})
	}
	onChange(id,i,value){
		console.log(id,value)
		var _this=this;
		$.ajax({
			type:"get",
			url:'http://jx.xuzhixiang.top/ap/api/cart-update-num.php',
			async:true,
			data:{
				uid:1128,pid:id,pnum:value
			},
			dataType:'json',
			success:function(data){
				console.log(data)
				var arr =_this.state.list;
				arr[i].pnum=value ;
				_this.setState({list:arr})
			}
		})
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
	
	zong(){
		var zong = 0;
		this.state.list.map((item,i)=>{
		if(item.selected==true){
			zong+=item.pprice*item.pnum
		}
		})
		return zong;

	}
	jiesuan(){
		var zong1=parseInt(this.zong);
		console.log(zong1);
		
	}
	
	render(){
		return(
		<div className='cart'>
		<div className='cart1'>
			{
				this.state.list.map((item,i)=>{
					return(
					
					<div key={i} className='dange'>
					<input className='dx' type="checkbox" checked={item.selected} onChange={this.changeitem.bind(this,i)}/>
				
					<img src={item.pimg} alt="111"/>
					
					<p>{item.pdesc}</p><br/>
					<h3>￥{item.pprice}</h3>
				<InputNumber min={1} value={item.pnum} onChange={this.onChange.bind(this,item.pid,i)} ref="ipt"/>

			        <Button className='del' type="primary" onClick={this.del.bind(this,item.pid,i)}>删除</Button>
					</div>
					
					
					)
				})
			}
			</div>
			<div className='xuan'>
			<div className='quanxuan'>全选:<input type="checkbox" checked={this.state.checkall} onChange={this.checkchange.bind(this)}/></div>
			<div className='zong'>总价:{this.zong.bind(this)()}</div>
			<div className='fukuan'><NavLink to='/fukuan'><Button className='jiesuan1' type="danger" onClick={this.jiesuan.bind(this)}>结算</Button>
</NavLink></div>
</div>

              
			  
			  
			  
			  

		</div>
		
		)
	}
	componentDidMount(){
		
		
		  function loadingEffect() {
		      var loading = $('#loader');
		      loading.hide();
		      $(document).ajaxStart(function () {
		          loading.show();
		      }).ajaxSuccess(function () {
		          loading.hide();
		      });
		  }
		 
		  loadingEffect();
		
		
		
		var _this=this;
		$.ajax({
			url:'http://jx.xuzhixiang.top/ap/api/cart-list.php',
			data:{
				id:1128
			},
			async:false,
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
export default Cart;