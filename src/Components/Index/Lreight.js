import React from 'react';
import $ from 'jquery';
import '../../css/list/right.css'
import {NavLink} from 'react-router-dom';
class Lreight extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            detail:{},

            arr:[
                {
                    biao:'手机',

                },
                {
                    biao:'电器'
                }
            ],
            list:[
                {
                    title: '空气净化器',
                    url: 'http://img.muji.com.cn/img/item/4547315820665_400.jpg'
                  },
                  {
                    title: '棉不均匀染色开衫',
                    url: 'http://img.muji.com.cn/img/item/4549738656746_400.jpg'
                  },
                  {
                    title: '硅胶球形制冰器',
                    url: 'http://img.muji.com.cn/img/item/4549738306771_400.jpg'
                  },
                  {
                    title: '组合柜',
                    url: 'http://img.muji.com.cn/img/item/4549337263215_400.jpg'
                  },
                  {
                    title: '牛奶巧克力',
                    url: 'http://img.muji.com.cn/img/item/4549738664512_400.jpg'
                  },
                  {
                    title: '棉法兰绒被套 ',
                    url: 'http://img.muji.com.cn/img/item/4549738391210_400.jpg'
                  },
                  {
                    title: '牛奶巧克力',
                    url: 'http://img.muji.com.cn/img/item/4549738664512_400.jpg'
                  },
                  {
                    title: '棉法兰绒被套 ',
                    url: 'http://img.muji.com.cn/img/item/4549738391210_400.jpg'
                  }

            ]

        }
        
    }
    render(){
        var _this=this;
        return(
            <div>
                
{
    this.state.arr.map(function(item,i){
        return(
            <div className='l1' key={i}>
            <h2>{item.biao}</h2>
            <div  className="l2">
                {
                    _this.state.list.map(function(it,i){
                        return(
                            <div key={i}>
                            {/* <a href=''></a> */}
                            <NavLink to="/elist/1">
                                <img src={it.url}/>
                            </NavLink>   
                            </div>
                        )
                    })
                }
            </div>
            </div>
        )
    })
}
             
            </div>
        )
    }
    componentDidMount(){
        // console.log(this.props)
        var _this=this;
        $.ajax({
            type:"get",
            url:"http://jx.xuzhixiang.top/ap/api/detail.php",
        
            dataType:'json',
            async:true,
            success:function(data){
                console.log(data.data)
             _this.setState({detail:data.data})
            }

        })
    }
    componentWillReceiveProps(){
    
        var _this=this;
        $.ajax({
            type:"get",
            url:"http://jx.xuzhixiang.top/ap/api/detail.php",
            data:{id:_this.props.match.params.id},
            dataType:'json',
            async:true,
            success:function(data){
                console.log(data.data)
             _this.setState({detail:data.data})
            }

        })
    }
}
export default Lreight;