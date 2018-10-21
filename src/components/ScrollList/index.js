import React, { Component } from 'react';
//可以接受几个参数
//element:表示滚动元素
//isLoading 是否正在加载
// hasMore 是否有更多
//loadMore  获取跟多的方法
class ScrollList extends Component {
    constructor(){
        super();
        this.state = {flag:false}
    }
    //等待接受的属性有element 再绑定时间
    componentWillReceiveProps(nextProps){ 
        //父组件数据更新，会触发子组件的WillReceiveProps
        //此钩子函数，父组件没有发生状态的变化 子组件不更新
        if(nextProps.element && !this.state.flag){
            // 节流
            nextProps.element.addEventListener("scroll",()=>{
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    //判断scrollTop,offsetHeight,scrollHeight
                    let { scrollTop, offsetHeight, scrollHeight } = nextProps.element;
                    //距离底部还有20像素就加载
                    if(scrollTop+offsetHeight+20>scrollHeight && this.props.hasMore && !this.props.isLoading){
                        this.props.loadMore();
                        console.log("加载更多")

                    }
                },50)

            })
            this.setState({flag:true});
        }
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default ScrollList;