const mongoose = require('mongoose') ;

const userSchema = mongoose.Schema({
    name : {type: "String" , required : true } ,
    email : {type : "String" , required : true } ,
    password : {type : String , required : true , minLength : [8 , "Min Length is 8"]} ,
})

const User = mongoose.model('User' , userSchema ) ;

module.exports = User ;