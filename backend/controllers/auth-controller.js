const User = require("../models/user")

const register = async (req, res) => {
    try { 
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            throw new Error("All fields are required");
        }

        // Check if user already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            throw new Error('User already exists!');
        }

        // Create a new user
        const user = await User.create({ name, email, password }) ;
        // Respond with a success message or user data if needed
        res.status(201).json(
            { 
                message: 'User registered successfully' ,
                user : user
            });
    } catch (error) {
        // Handle errors
        console.error(error.message);
        res.status(400).json({ error: error.message , stack : error.stack });
    }
};


const login = async (req, res)=>{

    try{
        const {email , password} = req.body ;

        if(!email || !password)
        {
            throw Error('All fields are required') ;
        }
        const user = await User.findOne({email}) ;
        if(!user)
        {
            throw Error("Email or password is wrong") ;
        }
        const isVarified = await user.matchPassword(password) ;
        if(!isVarified)
        {
            throw Error('pass not matched');
        }
        res.json({msg : 'success'})  ;
    }
    catch(err)
    {
        res.status(400).json({err , stack: err.stack}) ;
    }
  

}

module.exports = {register , login} ;