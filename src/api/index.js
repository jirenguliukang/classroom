export const get = (url) =>{
    return fetch(url,{
        method:'get',//获取的方法
        credentials:'include', //跨域携带cookie
        headers:{
            accept:'application/json'
        }
    }).then(res=>res.json())

};
// get('/slider').then(data=>{}) 实例
export const post=(url,data)=>{
    return fetch(url,{
        method:'get',//获取的方法
        credentials:'include', //跨域携带cookie
        headers:{
           'Content-Type':'application/json',
            accept:'application/json'
        },
        body:JSON.stringify(data)
    }).then(res=>res.json())

}