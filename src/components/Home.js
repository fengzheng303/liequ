import React from "react";
import '../css/Home.css';
import '../iconfont/iconfont.css';

import 'antd/dist/antd.css';
import { Input } from 'antd';
import $ from "jquery";
//import '../js/iscroll.js';
import {NavLink} from "react-router-dom";
import IScroll from 'react-iscroll';
import iScroll from 'iscroll/build/iscroll-probe'; 

const Search = Input.Search;
var active={color:"red",background:"white"}
class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
	}
	
	
	
	render(){
		return(
		<div className="home">
				<div className="nav">
			
				
				 <p><NavLink to='/home'>好物</NavLink></p>
				 <p><NavLink to='/fujin'>附近</NavLink></p>
				 	 <span style={{background:"red",height:"5px",width:"20px",position:"absolute",left:"83px",
				 top:"80px"}}></span>
				</div>
			
				<div className="list1">
					{
					this.state.list.map((item,i)=>{
						return(
						<div key={i}>
						<NavLink to={'/detail/'+item.pid}><p><img className='pic' src={item.pimg} alt='图片无法加载' title='买买买'/></p>
					    <p>{item.pname}</p>
						
						<p><span>{item.pprice}</span><i className='iconfont icon-shoucang'></i></p>
						</NavLink>
						</div>
						)
					})
				}
				</div>
				
				<div className='foot'>
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
					<div><NavLink to='/fabu'>
					<i className='iconfont icon-xiangji'></i>
					<span>发布</span></NavLink>
					</div>
					<div><NavLink to='/home'>
					<i className='iconfont icon-lianxi'></i>
					<span>消息</span></NavLink>
					</div>
					<div><NavLink to='/home'>
					<i className='iconfont icon-wo01'></i>
					<span>我</span></NavLink>
					</div>
				</div>
				
		</div>
		
		
		)
	}
	
	
	
	
	//sdsddsdadsad
	
	componentDidMount(){
		var myIscroll=new IScroll('.list1',{});
		var _this=this;
		
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


		
		
		
		$.ajax({
			url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
			data:{
				uid:1128
			},
			async:true,
			dataType:"json",
			success:function(data){
				//console.log(data.data)
				myIscroll.refresh() //刷新iscroll可滚动的区间范围
				_this.setState({list:data.data});	
				
			
				
				
			}	
		});
		
		
		
		

	} 
	//lem
		
		
		componentDidUpdate() {
			
			var myIscroll=new IScroll('.list1',{});
			var _this=this;
		
		             $(document).on('touchend',function(){
					//下拉刷新
					if(myIscroll.y>50){
						$.ajax({
							type:'get',
							url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
							data:{
								uid:1128
							},
								async:true,
							dataType:'json',
							
							success:function(data){
								//console.log(data.data);
							
										_this.setState({list:data.data});
									
								
								myIscroll.refresh() //刷新iscroll可滚动的区间范围
							}
						
						});
					}
					//上拉加载
					if(myIscroll.y<myIscroll.maxScrollY-50){
						
						$.ajax({
							type:'get',
							url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
							data:{
								uid:1128
							},
								async:true,
							dataType:'json',
							success:function(data){
								//console.log(data.data);
									_this.setState({list:data.data});
								myIscroll.refresh() //刷新iscroll可滚动的区间范围
							}
						
						});
					}
					
				})
		}
		
		

	//////
}




export default Home;