import React from 'react';
import Lleft from './Lleft';
import Lreight from './Lreight';
import Footer from './Footer';
import '../../css/List.css'
import $ from 'jquery';



class List extends React.Component{
    render(){
        return(
            
                <div className="list">
                        <div className="lh">
                            <a href="/sou">
                                <i>1</i>
                                <span>搜素</span>                   
                                </a>

                            <a href="">
                                    购物车
                                    </a>
                        </div>
                    <div className="lz">
                            <div className="left">
                            <Lleft/>
                            </div>
                            <div className="right">
                            <Lreight/>
                            </div>
                    </div>
                    <Footer/>
                    
                
        </div>
        )
    }
    componentDidMount(){
        function loadingEffect() {
            var loading = $('#loader');
            loading.hide();
            $(document).ajaxStart(function () {
                loading.show();
            }).ajaxSuccess(function () {
                loading.hide();
            });
        }

        loadingEffect(); 
    }
}


export default List