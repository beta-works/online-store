const Product = require("../models/Product");

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single product
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const { name, description, price, category, imageUrl, stock } = req.body;

  const newProduct = new Product({
    name,
    description,
    price,
    category,
    imageUrl,
    stock,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a Product
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all products by category
exports.getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all products by name
exports.getProductsByName = async (req, res) => {
  try {
    const products = await Product.find({ name: req.params.name });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all products by price range
exports.getProductsByPriceRange = async (req, res) => {
  try {
    const products = await Product.find({
      price: { $gte: req.params.min, $lte: req.params.max },
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/*
    In this file, we define the controller functions for handling CRUD operations on products. 
    
    These functions interact with the Product model to perform operations like fetching all products, 
    fetching a single product by ID, creating a new product, updating an existing product, and deleting a product.

    Each function follows a similar pattern: it tries to perform the desired operation using the Product model methods 
    (e.g., find, findById, save, findByIdAndUpdate, findByIdAndDelete), and sends an appropriate response based on the result. 
    
    If an error occurs, it sends an error response with the error message.
*/