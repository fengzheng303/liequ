import React from 'react';
import '../../css/wo/she.css';
import '../../css/wo/wz.css';

import img from '../img/1.jpg';

import {NavLink} from 'react-router-dom';

class WZ extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            jin:'2.00'
        }
        
    }
    fan(){
        this.props.history.go(-1)
    }
    render(){
        return(
            <div className='she'>
                <div className='sh'>
                    <i onClick={this.fan.bind(this)}>1</i>
                    <span>我的账户</span>
                    <i>1</i>
                </div>
                <div className='ss'>
                    <div className='sz'>
                        
                        <NavLink style={{
                            display:'flex',
                            flexDirection:'column',
                            height:'100px'

                        }} to='/sgz'>
                       
                           <p>账户余额</p>

                            <p  style={{
                            textAlign:"right",
                            fontSize:"20px"

                        }}>￥{this.state.jin}</p>
                        
                        
                        </NavLink>
                        <NavLink  to=''>
                            <div>
                            待结算金额            
                            </div>
                            <div>
                                <span>${this.state.jin}</span>
                                <i>1</i>
                            </div>
                            
                        </NavLink>
                        <NavLink  to=''>
                            <div>
                           账户明细         
                            </div>
                            <div>
                             1
                            </div>
                            
                        </NavLink>
                        <NavLink  to=''>
                            <div>余额转出(体现)     
                            </div>
                            <div>
                                1
                            </div>
                            
                        </NavLink>
                    </div>
                    <div className="tx">
                        <div className="txb">
                            <span>设置体现账户</span>
                            <span style={{color:"blue"}}>结算体现说明</span>
                        </div>
                        <NavLink to="">
                            <div>
                               <span>支付宝</span>
                                <p>
                                    预计1-2个工作日到账
                                </p>
                            </div>
                            <div>
                                设置
                                <i>1</i>
                            </div>
                        </NavLink>
                        <NavLink to="">
                            <div>
                               <span>银行卡</span>
                                <p>
                                    预计1-2个工作日到账
                                </p>
                            </div>
                            <div>
                                设置
                                <i>1</i>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default WZ;
