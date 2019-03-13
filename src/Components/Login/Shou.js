import React from 'react';
import {Icon} from 'antd-mobile';
import $ from 'jquery';
import '../../css/shou.css';
import {NavLink,hashHistory as Router} from 'react-router-dom';
class Shou extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            username:'',
            password:''
        }
        
    }
    fan(){
        this.props.history.go(-1)
    }
    dian(){
        // var dian=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;

        // if(dian.test(this.refs.name.value)){
        //    this.setState({username:this.refs.name.value})
        // }else{
        //     alert('电话号码风式错误')
        // }
        this.setState({username:this.refs.name.value})
    }
    mi(){
        var ps = /^[\w_-]{6,16}$/;
        if(ps.test(this.refs.name.value)){
            this.setState({password:this.refs.pass.value})
         }else{
             alert('密码格式错误')
         }
    }
        ti(){
           console.log('12')
var _this=this;
var obj={
    'uname':this.state.username,
    'upassword':this.state.password
   }
$.ajax({
    type:"get",
    url:'http://39.105.231.18/liequ/ruseregist',
    data:obj,
    dataType:'json',
    success:function(data){
        console.log(data)   
        if(data.code==1){
            var ob=JSON.stringify(obj)
            localStorage.setItem('uid',ob)
            _this.props.history.push('/index')
        }else{
            alert('注册失败')
        }
   
    }
})
    }
    render(){
        return(
            <div className="shou">
                <div className='header'>
                <span onClick={this.fan.bind(this)}><Icon type="left" />  </span> 
                <span>输入手机号</span>
                <span></span>
                </div>
                <section>
                    <div className="hao">
                        <span>手机号</span>
                        <input type="text" onBlur={this.dian.bind(this)} ref='name' placeholder='请输入11为手机号'/>                    </div>
                    <div className="hao">
                        <span>密码</span>
                        <input type="text" onBlur={this.mi.bind(this)} ref='pass' placeholder='请输入密码' />
                    </div>
                    <span onClick={this.ti.bind(this)} className='button'>下一步</span>
                    <p>继续注册表示您阅读并同意<NavLink to="">《猎取网含App服务协议》</NavLink></p>
                </section>
            </div>
        )
    }
    
}
export default Shou;