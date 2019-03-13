import React from 'react';
import $ from 'jquery';
import '../../css/wo/header.css';


class Mc extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            arr:[],
            mai:'未购买'
        }
    }
    
    fan(){
        this.props.history.go(-1)
    }
    gm(i){
        alert('是否支付')
        this.setState({mai:"已购买"})
        var arr1=this.state.arr;
        arr1.splice(i,1)
        this.setState({arr:arr1})
    }

    render(){
        var _this=this;
        return(
            <div className="rong">
                <div className="head">
                    <div className="ht">
                        <i onClick={this.fan.bind(this)}>1</i>
                        <span>卖出订单</span>
                        <i></i>
                    </div>
                    <div className="hb">
                        <span>全部</span>
                        <span>待付款</span>
                        <span>待发货</span>
                        <span>待收货</span>

                    </div>
                </div>
                <div className="section">
                    <div className="ding"> 
                        你还没有相关订单
                    </div>
                    {
                        this.state.arr.map(function(item,i){
                            return (
                                <div style={{margin:'10px 0'}} className="go" key={i}>
                                    <img src={item.pimg}/>
                                    <div>
                                        <p>{item.pdesc}</p>
                                        <div>
                                            {item.pprice}
                                            <div onClick={_this.gm.bind(_this,i)}>{_this.state.mai}</div>
                                        </div>
                                    
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
     var id=localStorage.getItem('uid')
        console.log(id)
       if(id===''){
           $('.ding').css({'display':'block'})
       }else{
        $('.ding').css({'display':'none'})
       }
       var _this=this;
       $.ajax({
           type:'get',
           url:"http://jx.xuzhixiang.top/ap/api/cart-list.php",
           data:{id:1128},
           success:function(data){ 
           var id=JSON.parse(data)
               console.log(id.data)
            _this.setState({arr:id.data})
           }
       })
    }
}
export default Mc;