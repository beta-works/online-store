const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        // Save the new user
        const savedUser = await newUser.save();

        // Generate a JWT token
        const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// User login
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try{
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ... (other user-related controller functions)

/*
    In this file, we define the controller functions for handling user authentication and authorization. 
    
    The registerUser function handles user registration by creating a new user document in the database, 
    hashing the password using bcrypt, and generating a JSON Web Token (JWT) for the authenticated user.

    The loginUser function handles user login by finding the user by email, 
    comparing the provided password with the hashed password stored in the database using bcrypt.compare, 
    and generating a JWT token for the authenticated user.

    You can add additional controller functions for other user-related operations, 
    such as updating user profiles, retrieving user information, and managing user roles and permissions.
*/