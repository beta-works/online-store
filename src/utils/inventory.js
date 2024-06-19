/* In this implementation, we define two functions for managing inventory:

- updateProductStock: 
    This function updates the stock of a product by finding the product by its ID and updating the stock field.

- checkProductAvailability: 
    This function checks if a product is available in the desired quantity by finding the product by its ID, 
    and comparing the stock field with the desired quantity.

Both functions use the Product model to interact with the product data in the database.

With these utility functions implemented, you can import and use them in your controllers, 
or other parts of the application to handle cart management, order processing, and inventory management operations.
 */

const Product = require("../models/Product");

// Function for managing inventory
exports.updateProductStock = async (productId, quantity) => {
  try {
    // Find the product by ID
    const product = await Product.findById(productId);

    if (!product) {
      throw new Error("Product not found");
    }

    // Update the product stock
    product.stock += quantity;
    await product.save();
  } catch (err) {
    console.error("Error updating product stock:", err);
    throw err;
  }
};

exports.checkProductAvailability = async (productId, quantity) => {
    try {
        // Find the product by ID
        const product = await Product.findById(productId);

        if (!product) {
            throw new Error('Product not found');
        }

        // Check if the product is available in the desired quantity
        return product.stock >= quantity;
    } catch (err) {
        console.error('Error checking product availability:', err);
        throw err;
    }
}