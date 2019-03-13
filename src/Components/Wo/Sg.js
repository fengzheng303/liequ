import React from 'react';
import '../../css/wo/she.css';
import img from '../img/1.jpg';

import {NavLink} from 'react-router-dom';

class Sg extends React.Component{
    constructor(props) {
        super(props)
        
    }
    fan(){
        this.props.history.go(-1)
    }
    render(){
        return(
            <div className='she'>
                <div className='sh'>
                    <i onClick={this.fan.bind(this)}>1</i>
                    <span>设置</span>
                    <i>1</i>
                </div>
                <div className='ss'>
                    <div className='sz'>
                        <h2>账号设置</h2>
                        <NavLink className='sg' to='/sgz'>
                        <div>
                            <i>1</i>
                            <img src={img}/>
                        </div>
                        <div>
                            <span>编辑个人资料</span>
                            <i></i>
                        </div>
                        
                        </NavLink>
                        <NavLink  to='/sgx'>
                        <div>
                          修改密码
                        </div>
                        <div>
                           1
                        </div>
                        
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Sg;
