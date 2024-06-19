/**
*   In this implementation, we define three functions for managing orders:
*
*   - processOrder: 
*       This function processes a new order by saving it to the database, 
*       sending an order confirmation (e.g., via email), 
*       and updating the order status to "processing".
*
*   - cancelOrder: 
*       This function cancels an existing order by finding the order by its ID, 
*       updating the order status to "canceled", and performing any additional cancellation logic (e.g., restocking products).
*
*   - updateOrderStatus:
*       This function updates the status of an existing order by finding the order by its ID, 
*       and updating the order status.
*   
*   Note: 
*       The sendOrderConfirmation function is a helper function that simulates sending an order confirmation. 
*       In a real application, you would replace this with your implementation to send actual order confirmations (e.g., via email).
*/

const Order = require('../models/Order');

// Functions for managing orders
exports.processOrder = async (order) => {
    try {
        // Save the order to the database
        const savedOrder = await order.save();

        // Send order confirmation (e.g., via email)
        sendOrderConfirmation(savedOrder);

        // Update order status
        savedOrder.staus = 'processing';
        await savedOrder.save();
    } catch (err) {
        console.error('Error processing order:', err);
        throw err;
    }
};

exports.cancelOrder = async (orderId) => {
    try {
        // Find the order by ID
        const order = await Order.findById(orderId);

        if (!order) {
            throw new Error('Order not found');
        }

        // Cancel the order
        order.status = 'canceled';
        await order.save();

        // Perform any additional cancellation logic (e.g., restock products)
    } catch (err) {
        console.error('Error cancelling order:', err);
        throw err;
    }
}

exports.updateOrderStatus = async (orderId, status) => {
    try {
        // Find the order by ID
        const order = await Order.findById(orderId);

        if (!order) {
            throw new Error('Order not found');
        }

        // Update the order status
        order.status = status;
        await order.save();
    } catch (err) {
        console.error('Error updating order status:', err);
        throw err;
    }
}

// Helper function to send order confirmation (replace with your implementation)
const sendOrderConfirmation = (order) => {
    // Implementation to send order confirmation (e.g., via email)
    console.log(`Order Confirmation sent for order ${order._id}`);
}