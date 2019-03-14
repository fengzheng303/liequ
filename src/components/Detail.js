import React from "react";
import $ from "jquery";
import { InputNumber,Button, Comment, Form, List, Input } from 'antd';
import moment from 'moment';
import {NavLink} from "react-router-dom";
import '../css/Detail.css';
import Swiper from 'swiper/dist/js/swiper';
import 'swiper/dist/css/swiper.min.css';




const TextArea = Input.TextArea;
const onClose = (e) => {
  console.log(e, 'I was closed.');
};
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({
  onChange, onSubmit, submitting, value,
}) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
       提交评论
      </Button>
    </Form.Item>
  </div>
);



class Detail extends React.Component{
	constructor(props){
		super(props)
		this.state={
			detail:{},
			comments: [],
    submitting: false,
    value: '',
		}
	}
	//
	
	 handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'fengzheng',
           
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

	
	
	//
	onChange(value){
		console.log(value)
		this.setState({num:value})
	}
	add1(){
		$('.numb').slideToggle("slow");
		
	}
	add2(){
		$('.numb').slideToggle("slow");	
	}
	shoucang(){
		$('.jiage i').toggleClass("red");
		alert("收藏成功")
	}
	add3(){
		var _this=this;
		$.ajax({
			type:'get',
			url:'http://jx.xuzhixiang.top/ap/api/add-product.php',
			data:{uid:1128,pid:_this.props.match.params.id,pnum:1},
			async:true,
			dataType:'json',
			success:function(data){
				console.log(data)	
				
			}
			
		})
		
		
		
		
	}
	add(){
		var _this=this;
		$.ajax({
			type:'get',
			url:'http://jx.xuzhixiang.top/ap/api/add-product.php',
			data:{uid:1128,pid:_this.props.match.params.id,pnum:_this.state.num},
			async:true,
			dataType:'json',
			success:function(data){
				console.log(data)	
				alert(	"加入成功")
			}
			
		})
		
	}
	render(){
		 // const { data = [] } = this.props || {};
		  
		  const { comments, submitting, value } = this.state;

		  
		return(
		<div className='detail'>
		<div className='detail1'>
			<div className="swiper-container">
				<div className="swiper-wrapper">
					<div className="swiper-slide"><img src={this.state.detail.pimg} alt="111"/></div>
					<div className="swiper-slide"><img src='http://g.search.alicdn.com/img/i4/117524200/TB2IuaDuyMnBKNjSZFoXXbOSFXa_!!0-saturn_solar.jpg_220x220.jpg_.webp' alt="111"/></div>
					<div className="swiper-slide"><img src='http://g.search3.alicdn.com/img/i3/113112861/O1CN01REUfKI1X0NeGpCIN7_!!0-saturn_solar.jpg_220x220.jpg_.webp' alt="111"/></div>
					
				</div>
				
				<div className="swiper-pagination"></div>
			
			</div>
		
		


			<div className='jiage'>
			<h2>{this.state.detail.pname}</h2>
			<p>￥{this.state.detail.pprice}</p>
			<i onClick={this.shoucang.bind(this)} className='iconfont icon-shoucang'></i>
			
			<h3>商品描述:<br/>{this.state.detail.pdesc}</h3>

			</div>
			
			
			
			 {comments.length > 0 && <CommentList comments={comments} />}
			<Comment
			 
			  content={(
			    <Editor
			      onChange={this.handleChange}
			      onSubmit={this.handleSubmit}
			      submitting={submitting}
			      value={value}
			    />
			  )}
			/>
			</div>
			
			
			
			
			{/*<InputNumber min={1} defaultValue={1} onChange={this.onChange.bind(this)}/>*/}
			<div className='ms'>
						<div className='jiaru'>
						<div>
						<i className='iconfont icon-lianxi'></i>
						<span>联系卖家</span>
						</div>
						<div><NavLink to='/cart'>
						<i className='iconfont icon-gouwuche'></i>
						<span>购物车</span></NavLink>
						</div>
						<Button type="primary" onClick={this.add3.bind(this)}>加入购物车</Button>
						<Button type="danger" onClick={this.add1.bind(this)}>立即购买</Button>
						</div>
			</div>
			<div className='numb'>
			    <img src={this.state.detail.pimg}/>
			 	<p>￥{this.state.detail.pprice}<br/>库存数量:999+</p>
				购买数量:<InputNumber min={1} defaultValue={1} onChange={this.onChange.bind(this)}/>,
				<Button type="primary" onClick={this.add.bind(this)} className='btn2'>确定</Button>
				<button onClick={this.add2.bind(this)} className='btn1'>X</button>
			</div>
				
				
				
				
				
				
				
				
				
				
		</div>
		
		)
	}
	componentDidMount(){
		console.log(this.props.match.params.id)
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
		
		
		$.ajax('http://jx.xuzhixiang.top/ap/api/detail.php',{
			data:{
				id:_this.props.match.params.id
			},
			dataType:'json',
			type:'get',
			
			success:function(data){
				console.log(data.data)
				_this.setState({detail:data.data})
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
		 var mySwiper = new Swiper ('.swiper-container', {
		  direction: 'horizontal',
		  loop: true,
		  effect : 'fade',
keyboardControl : true,
		  // 如果需要分页器
		  paginationClickable:true,

		  pagination: '.swiper-pagination',
		  
		  // 如果需要前进后退按钮
		
		})        


	}
	
}
export default Detail;