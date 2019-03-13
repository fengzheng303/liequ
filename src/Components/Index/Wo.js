import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../css/wo/Windex.css';
import Footer from  './Footer'
class Wo extends React.Component{
constructor(props) {
    super(props)
    this.state={
        name:""
    }
}
pan(){
    var str= localStorage.getItem('uid')
    var obj =JSON.parse(str)
    console.log(obj)
    if(obj.name==''){
        this.props.history.push('/login')
    }else{
        this.props.history.push('/sgz')
    }
}
    render(){
        return(

            <div className='wo'>
                <div className='Wh'
                        style={{         
                        backgroundImage:"url(" + require("../../img/1.jpg") + ")",
                        }}>
                        <div className="wht">
                            <NavLink  to='/sg'>设置</NavLink>
                            <NavLink to='/gwc'>购物车</NavLink>
                        </div>
                        <div onClick={this.pan.bind(this)} className="whc">
                            <img style={{width:'50px',height:"50px",borderRadius:'25px'}} src="../img/2.jpg"/>
                            <span style={{color:'red'}}>{this.state.name}</span>
                        </div>
                        <div className="whb">
                            <NavLink to="">
                                <i>0(笔)</i>
                                <span>成功卖出</span>
                            </NavLink>
                            <NavLink to="">
                                <i>0%</i>
                                <span>好评率</span>
                            </NavLink>
                            <NavLink to="">
                                <i>0</i>
                                <span>好评</span>
                            </NavLink>
                            
                            <NavLink to="">
                                <i>0</i>
                                <span>差评</span>
                            </NavLink>
                        </div>
                </div>
                <div className='ws' >
                        <p className='fg'></p>
                        <div className="wd">
                            <h2 style={{fontSize:'14px',height:'30px',lineHeight:'30px',borderBottom:"1px solid #000"}}>我的订单</h2>
                            <div>
                                <NavLink to="">
                                <i>1</i>
                                <span>购买订单</span>
                                </NavLink>
                                <NavLink to="/mc">
                                <i>1</i>
                                <span>卖出订单</span>
                                </NavLink>
                                <NavLink to="/tk">
                                <i>1</i>
                                <span>退款管理</span>
                                </NavLink>
                                <NavLink to="/wz">
                                <i>1</i>
                                <span>我的账户</span>
                                </NavLink>                   
                            </div>
                        </div>    
                
                        <div className='wl'>
                        <p className='fg'></p>
                    
                        <NavLink to=""><i>1</i>
                                <div>
                                <span>我的发布</span>
                                 <i>1</i>
                               </div>
                        </NavLink>
                        <NavLink to="">
                                <i>1</i>
                                <div>
                                <span>我的拼团</span>
                                 <i>1</i>
                                </div>
                        </NavLink>
                        <NavLink to="">
                                <i>1</i>
                                <div>
                                    <span>我的收藏</span>
                                    <i>1</i>
                               </div>
                        </NavLink>
                        
                        <NavLink to=""><i>1</i>
                                <div>
                                <span>我的关注</span>
                                <i>0</i>
                                </div>
                        </NavLink>
                        
                        
                </div>
                
                </div>
   
                <Footer/>
            </div>
            
     
        )
    }
    componentDidMount(){
      var str= localStorage.getItem('uid')
      var obj =JSON.parse(str)
      console.log(obj)
    this.setState({name:obj.name})
    }
}


export default Wo;