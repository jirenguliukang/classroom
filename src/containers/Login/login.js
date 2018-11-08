import React, { Component } from 'react';
import './index.css';
import profile from '../../common/images/profile.jpg';
import Mheader from '../../components/Mheader';
import {Link} from 'react-router-dom';
//只有通过路由渲染的页面才有history属性

class Login extends Component {
    render() {
        return (
            <div className="login">
                <Mheader title="登录" />
                <img src={profile} alt="" width={"60px"}/>
                <ul>
                    <li><input type="text" placeholder="请输入用户名"/></li>
                    <li><input type="text" placeholder="请输入密码"/></li>
                    <li><Link to="/reg">前往注册</Link></li>
                    <li><a href="" className="login-btn">登录</a></li>
                </ul>
            </div>
        )
    }
}
export default Login;