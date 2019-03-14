import React from "react";
import '../css/Fabu.css';
import '../iconfont/iconfont.css';
import {NavLink} from "react-router-dom";
import 'antd/dist/antd.css';
import { Input ,Button} from 'antd';
import $ from "jquery";

class Fabu extends React.Component{
	constructor(props){
		super(props)
		this.state={
			name:'',
			desc:'',
			price:'',
			img:''
		}
	}

	jia(){
		
		var _this=this;

		_this.setState({name:_this.refs.ipt.value});
		_this.setState({desc:_this.refs.ipt1.value});

		_this.setState({price:_this.refs.ipt2.value});
		_this.setState({img:_this.refs.ipt3.value});

		console.log(_this.state.name);
		

		$.ajax({
			type:'post',
			url:'http://jx.xuzhixiang.top/ap/api/goods/goods-add.php',
			data:{
			uid:1128,
			pname:_this.state.name,
			pdesc:_this.state.desc,
			pprice:_this.state.price,
			pimg:_this.state.img,
			},
			
			async:true,
			dataType:"json",
			success:function(data){
				
			}	
			
		})
		//_this.setState({name:''})
	}
	
	render(){
		return(
		<div className='fabu'>
		
		  <div className="list8">
		  	
		  		<div>
	
				<input type="text" ref="ipt" placeholder='请输入商品名称'/>
				<input type="text" ref="ipt1" placeholder='对商品描述'/>
				<input type="text" ref="ipt2" placeholder='请输入价格'/>
				<input type="text" ref="ipt3" placeholder='请上传图片'/>

				<Button className='jia' type="primary" onClick={this.jia.bind(this)}>上传</Button>
			
				
				
		  		{/*<NavLink to={'/detail/'+item.pid}><p><img className='pic' src={item.pimg}/></p>
		  	    <p>{item.pname}</p>
		  		
		  		<p><span>{item.pprice}</span><i className='iconfont icon-shoucang'></i></p>
		  		</NavLink>*/}
		  		</div>
		  		
		  	
		  
		
		
		</div>
		</div>
		)
	}
	
	/**/componentDidMount(){
		
		//var _this=this;
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
	
	} 
	
	
	
}
export default Fabu;