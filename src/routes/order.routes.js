/**
*   In this file, we define the routes for handling order-related operations. 
*   We import the express module and the orderController functions from the order.controller.js file.
*
*   We define routes for the following operations:
*   - POST / to create a new order
*   - GET / to retrieve all orders
*
*   You can add additional routes for other order-related operations, 
*   such as updating order status, canceling orders, and retrieving order details.
*/


const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

// Create a new order
router.post('/', orderController.createOrder);

// Get all orders
router.get('/', orderController.getAllOrders);

module.exports = router;
