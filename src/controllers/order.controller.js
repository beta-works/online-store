const Order = require('../models/Order');
const Product = require('../models/Product');

// Create a new Order
exports.createOrder = async (req, res) => {
    const { userId, products, totalAmount } = req.body;

    try {
        // Create a new order
        const newOrder = new Order({
            user: userId,
            products,
            totalAmount
        });

        //Save the new order
        const savedOrder = await newOrder.save();

        // Update product stock
        await Promise.all(
            products.map(async (product) => {
                const { productId, quantity } = product;
                await Product.findByIdAndUpdate(
                    productId,
                    { $inc: { stock: -quantity } },
                    { new: true }
                );
            }) 
        );

        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all Orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user', 'name email')
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ... (other order-related controller functions)

/*
    In this file, we define the controller functions for handling order-related operations. 
    The createOrder function handles the creation of a new order by saving the order details to the database 
    and updating the product stock.

    The getAllOrders function retrieves all orders from the database and populates the user field with the user's name and email.

    You can add additional controller functions for other order-related operations, such as updating order status, 
    canceling orders, and retrieving order details.
*/