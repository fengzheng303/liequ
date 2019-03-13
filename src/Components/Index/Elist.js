import React from 'react';
import '../../css/list/Elist.css';
import $ from 'jquery';
import {NavLink} from 'react-router-dom';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

 class Elist extends React.Component{
     constructor(props) {
         super(props)
         this.state={
             a:'',
             arr:[],
             di:[]
         }
     }
     fa(){
        console.log(this.refs.b.value)
        this.setState({a:this.refs.b.value})
     }
     ti(){
         console.log(this.refs.b.value)
     }
     shai(){
        $(".shai").slideToggle("slow");
     }
     quy(){
         
         var _this=this;
         $('.qy').slideToggle("slow");
        $.ajax({
           type:'get',
            url:"http://jx.xuzhixiang.top/ap/api/all-province.php",
            dataType:'json',
            success:function(data){
                console.log(data.data)
                _this.setState({di:data.data})
            }
        })
     }
     xian(i){
         
    $.ajax({
        type:'get',
        utl:'http://jx.xuzhixiang.top/ap/api/all-city-of-province.php',
        data:{provinceid:i},
        dataType:'json',
        success:function(data){
            console.log(data)
        }
    })
     console.log(i)
        $('.qyl').animate({
            width:"50vw",
        })
        $('.qyr').animate({
            width:"50vw",
        })
       
        
     }
     qi(){
        var _this=this;
        $('.qi').slideToggle("slow");
       $.ajax({
          type:'get',
           url:"http://jx.xuzhixiang.top/ap/api/all-province.php",
           dataType:'json',
           success:function(data){
               console.log(data.data)
               _this.setState({di:data.data})
           }
       })
    }
    pai(){
        $('.pai').slideToggle("slow");
        $('.pai').slideToggle("slow");
        $('.pai').slideToggle("slow");
        $('.pai').slideToggle("slow");
    }
    sheng(){
        var arr1=this.state.arr;
      
        var min
        var li=[]
        for(var i=0;i<arr1.length;i++){
           for(var j=1;j<arr1.length;j++){
               if(arr1[i].pprice>arr1[j].pprice){
                   min=arr1[j];
                   arr1[i]=arr1[j]
                    arr1[j]=min
                   
                   
                }
               
                  }
                  li.push(arr1[j])      
                  return li
           }
      console.log(li)
    }
    jiang(){
        var arr2=this.state.arr;
        console.log(arr2)

    }
     render(){
         var _this=this;
         return(
             <div className='elist'>
                    <div className='eh'>
                        <div className='eht'>
                            <i>1</i>
                            <div>
                                <i> 1</i>
                                <input type="text"/>
                            </div>
                            <i onClick={this.shai.bind(this)}>筛选</i>
                        </div>
                        <div className='ehb'>
                        <div onClick={this.quy.bind(this)}>
                            <span>区域</span>
                            <i>v</i>
                        </div>
                        <div onClick={this.qi.bind(this)}>
                            <span>其他</span>
                            <i>v</i>
                        </div>
                        <div onClick={this.pai.bind(this)}>
                            <span>排序</span>
                            <i>v</i>
                        </div>
                        
                        </div>                      
                    </div>
                    <div className="shai">
                    <div className="shi">
                        <h2>使用程度</h2>
                        <div>
                            <span>不限</span>
                            <span>全新</span>
                            <span>二手</span>
                        </div>
                    </div>
                    <div className="jia">
                        <h2>价格区间</h2>
                        <div>
                            <span>100以下</span>
                            <span>300以下</span>
                            <span>500以下</span>
                            <span>1000以下</span>
                            <span>2000以下</span>
                            <span>3000以下</span>
                        </div>
                        <div>
                            自定义价格
                            <input type="text"/>
                            -
                            <input type='text'/>
                            元
                        </div>

                    </div>
                    <div>
                    <Button  type="primary" inline size="small" style={{ marginRight: '4px' }}>取消</Button>
                    <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>确定</Button>


                    </div>
                 </div>
                    <div className="qy">
                    <div className="qyl">
                    {
                        this.state.di.map((item,i)=>{
                            return(
                                <div onClick={this.xian.bind(this,item.areaId)} key={i}>
                                {item.areaName}

                                </div>
                            )
                        })
                    }
                     
                    </div>
                    <div className="qyr">

                    </div>

                    </div>
                    <div className='qi'>
                    <div className="qyl">
                    {
                        this.state.di.map((item,i)=>{
                            return(
                                <div onClick={this.xian.bind(this,item.areaId)} key={i}>
                                {item.areaName}

                                </div>
                            )
                        })
                    }
                     
                    </div>
                    <div className="qyr">

                    </div>
                </div>
                <div className='pai'> 
                        <div>综合排序</div>
                        <div>最新发布</div>
                        <div onClick={this.jiang.bind(this)}>降序</div>
                        <div onClick={this.sheng.bind(this)}>升序</div>

                </div>
                <div className="erlist">
               {
                   this.state.arr.map((item,i)=>{
                       return(
                           <div key={i}>
                           <NavLink to="/detail">
                        
                                   <img src={item.pimg}/>
                               
                              
                                   <p>{item.pname}</p>
                                   <p>{item.pprice}</p>

                           </NavLink>
                           </div>
                       )
                   })
               }
                </div>
             </div>
         )
     }
     
     componentDidMount(){
         var _this=this;
         $.ajax({
             type:"get",
             url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
            dataType:'json',
            async:'true',
            success:function(data){
                console.log(data)
_this.arr=data
_this.setState({arr:data.data})

            }
         })
   
        }
 }
export default Elist;