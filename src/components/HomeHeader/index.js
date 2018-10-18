import React, { Component } from 'react';
import './index.css';
import logo from '../../common/images/logo.jpg'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
class HomeHeader extends Component {
    constructor() {
        super();
        this.state = { isShow: false }
    }
    changeShow = () => {
        this.setState({ isShow: !this.state.isShow })
    }
    choose=(e)=>{
        //    e.target.getAttribute("type");
           this.props.chooseLesson(e.target.getAttribute("type"));
           this.changeShow();
    }

    render() {
        return (
            <div className="home-header">
                <div className="header-menu">
                    <img src={logo} />
                    <div onClick={this.changeShow}>
                        {
                            this.state.isShow ? <i className="iconfont icon-guanbi"></i> : <i className="iconfont icon-uilist"></i>
                        }
                        {/* <i className="iconfont icon-uilist"></i>
                <i className="iconfont icon-guanbi"></i> */}
                    </div>
                </div>
                <TransitionGroup>
                    {
                     
                        this.state.isShow ?
                            <CSSTransition timeout={1000} classNames="fadeIn">
                            <ul className="menu-list" onClick={this.choose}>
                                <li type="1">node课程</li>
                                <li type="2">html课程</li>
                                <li type="3">vue课程</li>
                                <li type="4">react课程</li>
                            </ul>
                            </CSSTransition> : null
                    }
                </TransitionGroup>
            </div>
        )
    }
}
export default HomeHeader;