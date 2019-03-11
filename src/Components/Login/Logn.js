import React from 'react';
import { Icon } from 'antd-mobile';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';
import '../../css/login.css'
class Logn extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            username:"",
            password:""
        }
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
        console.log(this.state.username,this.state.password)
        var _this=this;        
        $.ajax({
            url:"http://jx.xuzhixiang.top/ap/api/login.php",
            data:{username:243019,password:243019},
            dataType:"json",
            succession:function(data){
                console.log(data)
            }
        })

    }
        render() {
            return (
            <div className="s2">             
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
                         <input type="text" onBlur={this.zhang.bind(this)} ref='user' placeholder='请输入手机号'/>
                    </div>
                    <div>
                        <span>密码 </span>
                        <input type="text" onBlur={this.mi.bind(this)} ref='word' placeholder='6-16位字符'/>
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
    )
        }
    }
        export default Logn;