import React from 'react';

import $ from 'jquery';
import Footer from './Footer';
class Index extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            list:[]
        }
        
    }
    render(){
        return(
            <div className='rong'>
               <div className="top">首页</div>     
               <Footer/> 
            </div>
        )
    }
    componentDidMount(){
        var _this=this;
        // $.ajax({
        //     type:'get',
        //     url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
        //    dataType:'json',
        //     success:function(data){
        //         console.log(data.data)
        //         _this.setState({list:data.data})
              
        //     }
        // })
  
    }
}
export default Index;