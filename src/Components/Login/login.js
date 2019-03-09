import React from 'react';
import { Icon} from 'antd-mobile';
import {NavLink} from 'react-router-dom'

import '../../css/login.css'
let Swiper = window.Swier
class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            username:"",
            password:""
        }
    }
    componentDidUpdate(){
        if(this.swiper){
            this.swiper.slideTo(0, 0)
            this.swiper.destroy()
            this.swiper = null;
          }
        this.swiper =new Swiper('.swiper-container',{
          
   
        })
    }
    login(){
        console.log(this.refs.user.value)
        console.log(this.refs.word.value)

    }
    render(){
        return(
            <div className="swiper-container" >
                <div className="swiper-wrapper">
                <div className="swiper-slide s1" >
                    <p>
                        <Icon type='cross' size='lg'/>
                    </p>
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
                 <div className="swiper-slide s2">
                 <div>
                     <p>
                        <Icon type='cross' size='lg'/>
                    </p>
                    <div className="lf">
                       <p>没有行号，去注册</p>
                       <Icon type='up' size='lg'/>
                   </div>
                </div>
                    <div className='biao'>
                        <div>
                            <span>账号</span>
                            <input type="text" ref='user' placeholder='请输入手机号'/>
                        </div>
                        <div>
                            <span>
                                密码
                            </span>
                            <input type="text" ref='word' placeholder='6-16位字符'/>
                            <span>忘记密码</span>
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

            
        )
    }
}

export default Login;