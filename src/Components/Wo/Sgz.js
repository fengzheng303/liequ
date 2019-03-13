import React from 'react';
import $ from 'jquery';
import '../../css/wo/she.css';
class Sgz extends React.Component{

    constructor(props) {
        super(props)
        this.state={
            xing:'不填写',
            tou:"",
            ni:"",
            di:'北京',
        }
    }
    
    fan(){
        this.props.history.go(-1)
    }
    xing(){
        $('.xb').animate({top:'50vh'})
    }
    qu(){
        $('.xb').animate({top:'100vh'})
    }
    nan(){
     this.setState({xing:'男'})
     $('.xb').animate({top:'100vh'})
    } 
    nv(){
        this.setState({xing:'女'})
        $('.xb').animate({top:'100vh'})
       }
    cun(){
       var _this=this;
       $.ajax({
           type:"post",
           url:'',
           data:{ni:_this.state.ni,xing:_this.state.xing,di:_this.state.di},
           async:"true",
           dataType:'json',
            success:function(data){
                console.log(data)
            }
           
       }) 
    }
    ni(){
    this.setState({ni:this.refs.cheng.value})
    }
    dz(){
        this.setState({di:this.refs.dz.value})  
    }

    render(){
        return(
            <div className="sjhe">
                <div className='sh'>
                    <i onClick={this.fan.bind(this)}>1</i>
                    <span>设置个人资料</span>
                    <i onClick={this.cun.bind(this)}>保存</i>
                </div>
                <div className='ss'>
                    <div className='sz'>
                 
                        <div className='sg'>
                            <div>
                                <span>头像</span>
                                <input type='file' className='tu' name='im'/>
                            </div>
                            <div></div>                       
                        </div>
                        <div>
                            <div>
                                <span>昵称</span>
                               <input onBlur={this.ni.bind(this)} ref='cheng' type="text" value=''/>
                            </div>
                            <div>
                            </div>
                         </div> 
                         <div onClick={this.xing.bind(this)}>
                             <div >性别</div>
                             <div>
                                <span>{this.state.xing}</span>
                                 <i>1</i> 
                             </div>
                             
                         </div>
                         <div className='xb'>
                            <div onClick={this.nan.bind(this)}>男</div>
                            <div onClick={this.nv.bind(this)}>女</div> 
                           <input type="button" value="取消"/> 
                        </div>
                         <div>
                             <div>地址</div>
                             <div>
                            <input onBlur={this.dz.bind(this)} ref='dz' type="text" placeholder='北京'/>
                                 <i>1</i> 
                             </div>
                         </div>
                         
               </div>
               </div>
            </div>
        )
    }

}
export default Sgz;