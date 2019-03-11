import React from 'react';
import { Icon } from 'antd-mobile';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';
import '../../css/login.css'
class Log extends React.Component {
  
        render() {
            return ( 
            <div className="s1">
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
            )
        }
    }
        export default Log;