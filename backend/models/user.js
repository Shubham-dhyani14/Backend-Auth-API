const mongoose = require('mongoose') ;
const bcrypt = require('bcrypt') ;
const userSchema = mongoose.Schema({
    name : {type: "String" , required : true } ,
    email : {type : "String" , required : true } ,
    password : {type : String , required : true , minLength : [8 , "Min Length is 8"]} ,
})

userSchema.pre('save' , async function(){
    console.log('bcrutp');
    if(!this.isModified('password'))
    {
        console.log('called next bcr');
        return next() ;
    }

    const salt = await bcrypt.genSalt(10) ;
    const hash = await bcrypt.hash(this.password , salt) ;
    console.log('hasf'  , hash);
    this.password = hash ;
})
  
userSchema.methods.matchPassword = async function(password)
{
    return await bcrypt.compare(password , this.password) ;
}
const User = mongoose.model('User' , userSchema ) ;

module.exports = User ;