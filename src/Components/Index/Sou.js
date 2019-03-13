import React from 'react';
import '../../css/Sou.css';
import { NavLink } from 'react-router-dom';
class Sou extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            arr:[
                {   id:'0',
                    name:'ip'},
                {id:'1',
                    name:'手机'},
                {   id:"2",
                    name:'手机'},

            ]
        }
        
    }
    render(){
        return(
            <div className="sou">
               <div className="st">
                    <i>1</i>
                    <div>
                        <span>1</span>
                        <input type="text" placeholder="请输入关键字"/>
                    </div>
                    <span>搜索</span>
               </div>
               <div className="sl">
                   <h1> 暂无历史</h1>
               </div>
               <div className="re">
                 <p><i>1</i>热门搜索</p>
                 <div className='sl2'>
                    {
                        this.state.arr.map(function(item,i){
                            return(
                                <div key={i}>
                                <NavLink to={'/detail/'+item.id}>{item.name}</NavLink>
                                </div>

                            )
                        })
                    }
                </div>
               </div>
              

            </div>
        )
    }
    
}
export default Sou;