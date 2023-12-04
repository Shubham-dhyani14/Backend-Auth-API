const mongoose = require('mongoose') ;
const dbConnect = async ()=>{

    try{
        console.log("Connecting to db...") ;
        await mongoose.connect(process.env.MONGO_URI) ;
        console.log('db connection successful') ;
    }
    catch(err)
    {
        console.log("can't connect to db : " , err) ;
    }
}

module.exports = dbConnect ;