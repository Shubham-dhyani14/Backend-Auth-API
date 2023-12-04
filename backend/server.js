const express = require('express') 
const dotenv = require('dotenv')
dotenv.config() 
const authRouter = require('./routes/auth-router')
const dbConnect = require('./config/dbConnection')
const app = express() ;

dbConnect() ;

// middlewares 
app.use(express.json());
app.use('/api/user' , authRouter)

app.listen(process.env.PORT , ()=>{console.log("server started at ",process.env.PORT )})