import React, { Component } from 'react';
import "./index.css";
class Detail extends Component {
    componentWillMount(){
        if(!this.props.location.state){
            return this.props.history.push('/')
          }
    }
render() {
    //如果没有此属性，对象默认undefined解构会出错
        let {url,price,lesson} = this.props.location.state || {};   
return (
    <div>
        <img src={url} alt=""/>
        <p>{lesson}</p>
        <strong>{price}</strong>
    </div>
)
}
}
export default Detail;