import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';
class Mheader extends Component {
    back = () => {
        //withRouter 非路由跳转 引入此方法
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="m-header">
                <i className="iconfont icon-fanhui" onClick={this.back}></i>
                {this.props.title}
            </div>
        )
    }
}

//在当前组件上 增加history属性
export default withRouter(Mheader);