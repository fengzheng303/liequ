import React from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

import '../../css/footer.css'
class Footer extends React.Component{
den(){
 }
   fen(){
   
       var _this=this;
    var obj=JSON.parse( localStorage.getItem('uid'))
       console.log(obj)
   }


 


    render(){
        return(
            <div  className='foot' >
             
             <NavLink  to='/index'>
                <i>1</i>
                <span>首页</span>
             </NavLink>
             <NavLink to="/list">
                   <i>1</i>
                     <span>分类</span>
             </NavLink>
           
        
             <NavLink to='/wo'>
                <i>1</i>
                <span>我的</span>
             </NavLink>
             <NavLink to='/login'>
                <i>1</i>
                <span>login</span>
             </NavLink>
           
           
            </div>
        )
    }

}

export default Footer;