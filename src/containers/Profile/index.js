import React, { Component } from 'react';
import './index.css';
import profile from '../../common/images/profile.jpg';
import {Link} from 'react-router-dom';
class Profile extends Component {
render() {
return (
    <div className="profile">
        <div className="profile_bg">
            <img src={profile} alt="" />
            <Link to={"/login"} className="login-btn">登录</Link>
        </div>
    </div>
)
}
}
export default Profile;