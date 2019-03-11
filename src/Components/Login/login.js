import React from 'react';


import Log from './Log';
import Logn from './Logn';

import '../../css/login.css';
let Swiper = window.Swier
class Login extends React.Component{
   
    render(){
        return(
            <div className="swiper-container" >
                <div className="swiper-wrapper">
                <div className="swiper-slide s1" >
                   <Log />
                </div>
                 <div className="swiper-slide s2">
                 <Logn/>
                </div>
                
                </div>
            </div>

            
        )
    }
    componentDidUpdate(){
     
        this.swiper =new Swiper('.swiper-container',{
            direction: 'vertical', 
            loop: true, 
            freeModeSticky:true,
            effect : 'coverflow'
        })
    }
}

export default Login;