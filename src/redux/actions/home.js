import * as Types from '../action-types';
import {getSliders,getLessons} from '../../api/home';
//actionCreators 构建action对象的 它是一个function

export const setCurrentLesson = (val) =>{
    return{
        type:Types.SET_CURRENT_LESSON,
        val
    }

}
//如果使用reduxThunk actionCreator可以返回一个函数，函数中有dispatch参数

export const getSlider = () =>(dispatch)=>{
    getSliders().then(sliders=>{
        dispatch({
            type:Types.GET_SLIDERS,
            sliders
        })
    })
}


//getState = sore.getState
export const getLesson = () =>(dispatch,getState)=>{
    //从redux 取出limit type offset
    let {currentLesson,lesson:{hasMore,limit,offset}}=getState().home;
    if(!hasMore)return;//没有就不要获取
    //将isloading状态改为true
    dispatch({type:Types.SET_LOADING_STATUS});
    getLessons(currentLesson,offset,limit).then(lesson=>{
        dispatch({
            type:Types.GET_LESSONS,
            // lessons:lesson.lessons,
            // hasMore:lesson.hasMore,
            //可以简化成下面
            ...lesson
        })
    })
}