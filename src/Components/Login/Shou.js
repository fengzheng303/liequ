import React from 'react';
import {Icon} from 'antd-mobile';
import '../../css/shou.css'
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
    ti(){
        console.log(this.refs.name.value)
        var dian=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;

        if(!dian.test(this.refs.name.value)){
            alert('电话号码风式错误')
        }
        
        this.setState({username:this.refs.name.value})
      

    }
    render(){
        return(
            <div className="shou">
                <header>
                <span onClick={this.fan.bind(this)}><Icon type="left" />  </span> 
                <span>输入手机号</span>
                <span></span>
                </header>
                <section>
                    <div className="hao">
                        <span>手机号</span>
                        <input type="text" ref='name' placeholder='请输入11为手机号'/>                    </div>
                    <div className="hao">
                        <span>密码</span>
                        <input type="text" ref='pass' placeholder='请输入密码' />
                    </div>
                    <span onClick={this.ti.bind(this)} className='button'>下一步</span>
                    <p>继续注册表示您阅读并同意<NavLink to="">《猎取网含App服务协议》</NavLink></p>
                </section>
            </div>
        )
    }
    
}
export default Shou;