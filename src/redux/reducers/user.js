import * as Types from '../action-types';
let initState={
    userInfo:{}, // 用户的信息
    err:'' // 登录注册的错误信息
}


export default function(state=initState,action){
   switch(action.type){
       case Types.SET_ERROR:
       return {...state,err:action.error}
       case Types.SET_USER_INFO:
       return {...state,userInfo:action.userInfo}
   }
   return state;
}