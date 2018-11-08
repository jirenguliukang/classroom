import {post,get} from './index';

let url='http://localhost:3000';

//登录接口
export const regs = (userInfo) =>{
    return post(url+'/reg',userInfo)
}