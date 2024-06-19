const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// Get all products
router.get('/', productController.getAllProducts);

// Get a single product
router.get('/:id', productController.getProductById);

// Create a new product
router.post('/', productController.createProduct);

// Update a product
router.put('/:id', productController.updateProduct);

// Delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;

/*
    In this file, we define the routes for handling product-related operations. 
    We import the express module and the productController functions from the product.controller.js file.

    We define routes for the following operations:
        GET / to retrieve all products
        GET /:id to retrieve a single product by ID
        POST / to create a new product
        PUT /:id to update an existing product
        DELETE /:id to delete a product
    
    Each route is mapped to the corresponding controller function from the product.controller.js file.
*/