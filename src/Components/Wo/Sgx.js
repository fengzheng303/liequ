import React from 'react';
import $ from 'jquery';
import '../../css/wo/she.css';
class Sgx extends React.Component{
    constructor(props) {
        super(props)
        this.state={
           
            xin:'',

        }
    }
    
    fan(){
        this.props.history.go(-1)
    }
    que(){
        if(this.refs.xin.value!==this.refs.qxin.value){
            alert('新密码错误')
        }else{
            this.setState({xin:this.refs.qxin.value})
        }
    }
    bao(){
    var _this=this;
    var  id= localStorage.getItem('uid')
    var ob=JSON.parse(id)
    var name=ob.name
    console.log(id)
    console.log(name)
    //   this.setState({xin:this.refs.xin.value})
    var obj={
        'uname':name,
        'upassword':this.state.xin
    }
    console.log(obj)
      var _this=this;
        $.ajax({
            type:'get',
            url:'http://39.105.231.18/liequ/userupdate',
            data:obj,
            dataType:'json',
            async:'true',
            success:function(data){
                console.log(data)
              
            }
        })

    }

    render(){
        return(
            <div className='she'>
               <div className='sh'>
                    <i onClick={this.fan.bind(this)}>1</i>
                    <span>修改密码</span>
                    <i onClick={this.bao.bind(this)}>保存</i>
                </div>
                <div  className='ss'>
                   
                    <div className='sm'>
                        <span>新密码</span>
                        <input type="text" ref='xin' placeholder='6-16个字符'/>
                    </div>
                    <div className='sm'>
                        <span>确认新密码</span>
                        <input type="text" onBlur={this.que.bind(this)} ref='qxin' placeholder='确认新密码'/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Sgx;