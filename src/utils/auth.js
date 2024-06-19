const jwt = require('jsonwebtoken');

// Generate a JWT token
exports.generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  return token;
};

// Verify a JWT token
exports.verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (err) {
    throw new Error('Invalid token');
  }
};


/* In this file, we define two functions for working with JSON Web Tokens (JWT):

generateToken: This function generates a new JWT token with the provided userId and a 1-hour expiration time. The token is signed using the JWT_SECRET environment variable.
verifyToken: This function verifies a JWT token by decoding it using the JWT_SECRET environment variable. If the token is valid, it returns the decoded payload. If the token is invalid, it throws an error.
*/