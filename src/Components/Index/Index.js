import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../css/index.css';
import $ from 'jquery';

class Index extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            list:[]
        }
        
    }
    render(){
        return(
            <div>
                <header>
                    <div className="ht">
                        <NavLink to="">
                        <i>1</i>
                        <span>搜索</span>

                         </NavLink>
                            <NavLink to="">12</NavLink>
                    </div>
                    <div>
                        <span>好物</span>
                        <span>附近</span>                   
                    </div>
                </header>
                <section>
                  
                </section>
            </div>
        )
    }
    componentDidMount(){
        var _this=this;
        $.ajax({
            type:'get',
            url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
           dataType:'json',
            success:function(data){
                console.log(data.data)
                _this.setState({list:data.data})
                console.log(_this.state.list)
            }
        })
  
    }
}
export default Index;