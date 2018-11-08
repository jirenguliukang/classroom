import React, { Component } from 'react';
import './index.css';
import profile from '../../common/images/profile.jpg';
import Mheader from '../../components/Mheader';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user';
//只有通过路由渲染的页面才有history属性

class Reg extends Component {
    reg=()=>{
        this.props.reg({username:this.username.value,password:this.password.value})
        // console.log(this.username.value,this.password.value)
    }
    render() {
        return (
            <div className="login">
                <Mheader title="注册" />
                <img src={profile} alt="" width={"60px"}/>
                <ul>
                    <li><input type="text" placeholder="输入用户名" ref={(element)=>{this.username = element}}/></li>
                    <li><input type="text" placeholder="输入密码" ref={(element)=>{this.password = element}}/></li>
                  
                    <li><a onClick={this.reg} className="login-btn">注册</a></li>
                    <li>{this.props.user.err}</li>
                </ul>
            </div>
        )
    }
}
export default connect(state => ({...state}),action)(Reg)