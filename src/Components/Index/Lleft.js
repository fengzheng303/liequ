import React from 'react';
import '../../css/list/left.css';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';


class Lleft extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            list:[]
        }
    }
    

    render(){
        return(
            <div className='lleft'>
                {
                    this.state.list.map(function(item,i){
                        return(
                            <div key={i}>
                            <NavLink to={'/reight/'+i}>
                            {item.pid}
                            </NavLink>
          
                            </div>
                        )
                    })
                }
                <NavLink to='/sou'>搜索</NavLink>
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
                
                _this.setState({list:data.data})
            }
        }

        )
    }
}

export default Lleft;