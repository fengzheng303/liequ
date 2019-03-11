import React, {Component} from 'react';

import iScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'reactjs-iscroll';
 
class Ce extends Component {
  render() {
    return (
      <div>
        <ReactIScroll iScroll={iScroll} className="example">
          <div>数据</div>
        </ReactIScroll>
      </div>
    );
  }
}

export default Ce;