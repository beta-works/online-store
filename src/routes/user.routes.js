/**
*    In this file, we define the routes for handling user-related operations. 
*    We import the express module and the userController functions from the user.controller.js file.
*
*    We define routes for the following operations:
*       - POST /register to register a new user
*       - POST /login to handle user login
*
*    You can add additional routes for other user-related operations, 
*    such as updating user profiles, retrieving user information, 
*    and managing user roles and permissions.
*/


const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Register a new user
router.post("/register", userController.registerUser);

// User login
router.post("/login", userController.loginUser);

// ... (other user-related routes)

module.exports = router;
