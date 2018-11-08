let mongoose = require ('mongoose');

mongoose.createConnection('mongodb://localhost:27017/ketang',{useMongoClient:true});

let UserSchema = new mongoose.Schema({
    username:String,
    password:String,
})

module.exports =    mongoose.model('user',UserSchema)