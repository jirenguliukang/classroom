let express = require('express');
let app = express();

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