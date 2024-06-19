const { body, validationResult } = require('express-validator');

// Validate user registration data
exports.validateUserRegistration = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];

// Validate user login data
exports.validateUserLogin = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').notEmpty().withMessage('Password is required'),
];

// Validate product data
exports.validateProduct = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('category').notEmpty().withMessage('Category is required'),
  body('imageUrl').notEmpty().withMessage('Image URL is required'),
  body('stock').isNumeric().withMessage('Stock must be a number'),
];

// Validate order data
exports.validateOrder = [
  body('userId').notEmpty().withMessage('User ID is required'),
  body('products').isArray().withMessage('Products must be an array'),
  body('products.*.productId').notEmpty().withMessage('Product ID is required'),
  body('products.*.quantity')
    .isNumeric()
    .withMessage('Quantity must be a number'),
  body('totalAmount').isNumeric().withMessage('Total amount must be a number'),
];

// Handle validation errors
exports.handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

/*
In this file, we define validation rules for user registration, user login, product data, and order data using the express-validator library. We also define a middleware function handleValidationErrors to handle validation errors and send an appropriate response.

Note that you need to install the express-validator package (npm install express-validator) to use these validation functions.
*/