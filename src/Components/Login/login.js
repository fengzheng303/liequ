import React from 'react';
import $ from 'jquery';

import { Icon } from 'antd-mobile';
import {NavLink} from 'react-router-dom';
import '../../css/login.css';
import Swiper from 'swiper/dist/js/swiper';
import 'swiper/dist/css/swiper.min.css'

import Action from '../redux/Action'

class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            username:"",
            password:""
        }
    } 
   tap(){
       this.props.history.push('/index')
   }
   zhang(){
    console.log(this.refs.user.value)
    this.setState({username:this.refs.user.value})
}
mi(){
    console.log(this.refs.word.value)
    this.setState({password:this.refs.word.value})
}
login(){
    Action.addItem({name:this.refs.user.value,ps:this.refs.word.value})
    console.log(this.state.username,this.state.password)
    var _this=this; 
       var obj={
        'uname':this.state.username,
        'upassword':this.state.password
       }
       console.log(obj)
    $.ajax({
      
        type:'post',
        url:"http://39.105.231.18/liequ/userlogin",
        data:obj,
        dataType:"json",
        async:true,
        success:function(data){
            console.log(data)
            if(data.code=='1'){
             obj={
                 'id':data.uname,
           'name':data.data
             }   
             var ob=JSON.stringify(obj)
            localStorage.setItem('uid',ob)
            // _this.props.history.push('/index')
        }else{
            alert('用户名或密码错误')
        }
        }
    })

}
    render(){
        return(
            <div className="swiper-container" >
                <div className="swiper-wrapper">
                    <div className="swiper-slide s1" >
                         <div className="s1">
                            <div onClick={this.tap.bind(this)}>
                                <Icon type='cross' size='lg'/>
                            </div>
                            <div className="s">
                                    <span className="s11">猎趣</span>
                                    <span>手机上的跳槽市场</span>
                            </div>
                            <button><NavLink to='/shou'>手机号注册</NavLink></button>
                            <div className="deng">
                                <div>
                                    <p></p>
                                    <span>点击以下方式登陆</span>
                                    <p></p>
                                </div>
                                <div className="de">
                                    <div>
                                        <Icon type="smile" theme="outlined" />
                                        <span>微信登陆</span>
                                    </div>
                                    <div>
                                        <i>1</i>
                                        <span>微信登陆</span>
                                    </div>
                                    <div>
                                        <i>1</i>
                                        <span>微信登陆</span>
                                    </div>                     
                                </div>

                            </div>

                            <div className="lf">
                                <p>已有账号登陆</p>
                                <Icon type='up' size='lg'/>
                            </div>
                     </div>
                </div>
                <div className="swiper-slide s2">
                <div className="s2">             
               <div>
                    <NavLink to='/index'>
                        <Icon type='cross' size='lg'/>
                     </NavLink>
                    <div className="lf">
                       <p>没有行号，去注册</p>
                       <Icon type='up' size='lg'/>
                   </div>
                </div>
                <div className='biao'>
                    <div>
                        <span>账号</span>
                         <input type="text" onBlur={this.zhang.bind(this)} ref='user' placeholder='请输入手机号'/>
                    </div>
                    <div>
                        <span>密码 </span>
                        <input type="text" onBlur={this.mi.bind(this)} ref='word' placeholder='6-16位字符'/>
                        <NavLink to='/sgx'>修改密码</NavLink>
                    </div>
                 </div>
                <button onClick={this.login.bind(this)}>登陆</button>
                <div className="deng">
                    <div>
                        <p></p>
                        <span>点击以下方式登陆</span>
                        <p></p>
                    </div>
                    <div className="de">
                        <div>
                        <Icon type="smile" theme="outlined" />
                        <span>微信登陆</span>
                    </div>
                    <div>
                        <i>1</i>
                        <span>微信登陆</span>
                    </div>
                    <div>
                        <i>1</i>
                         <span>微信登陆</span>
                    </div>
                        
                </div>

            </div>
        </div>




                </div>
                
               
            </div>
</div>
            
        )
    }
    componentDidMount(){
     
    var swiper =new Swiper('.swiper-container',{
            direction: 'vertical', 
           
            freeModeSticky:true,
            
        })
    }
}

export default Login;