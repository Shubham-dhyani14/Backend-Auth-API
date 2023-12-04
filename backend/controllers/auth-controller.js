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
        await User.create({ name, email, password });

        // Respond with a success message or user data if needed
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        // Handle errors
        console.error(error.message);
        res.status(400).json({ error: error.message , stack : error.stack });
    }
};


module.exports = {register} ;