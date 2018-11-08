let express = require('express');
let app = express();
let session = require('express-session');
let mongoStore = require ('connect-mongo')(session);
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'zfpx',
    store:new mongoStore({
        url:'mongodb://localhost:27017/ketang'
    })
}))
app.listen(3000);
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin",
    "http://localhost:8080");
    res.header("Access-Control-Allow-Headers",
    "Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods",
    "PUT,POST,GET,DELETE,OPITIONS");
    res.header("Access-Control-Allow-Credentials",
    "true");
    res.header("X-Powered-By","3.2.1")
    if(req.method === "OPTIONS") res.send(200);
    else next();
})



let sliders = require('./mock/slider');
console.log(sliders);

app.get('/slider',function(req,res){
    res.json(sliders);
});
let lessonList = require('./mock/lessonList');
console.log(lessonList);
app.get('/lessonList/:type/:offset/:limit',function(req,res){
    
    res.json(lessonList);
})

//实现注册功能
let crypto = require('crypto');
//md5摘要算法 不可逆
// 1.任意字符串转换出来的大小都相同
// 2.不同内容转化出来的值不同
// 3.不可逆
//
let md5=(val)=>{
   return crypto.createHash('md5').update(val).digest('hex')
}
console.log(md5('123456'));
let User = require('./model');
app.get('./reg',function(req,res){
    //加密密码
    req.body.password = md5(req.body.password)
    User.findOne({username:req.body.username}).then(doc=>{
        if(doc){
           res.json({err:'用户存在了'})
        }else{
            User.create(req.body).then(doc=>{
               req.session.user= doc //将当前用户存入到session中
               res.json(req.session.user);
            })
        }
    })
})

