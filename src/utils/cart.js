/**
*   In this implementation, we define four functions for managing the shopping cart:
*
*   addToCart: This function adds a product to the cart. If the product is already in the cart, it updates the quantity. If the product is not in the cart, it adds a new item to the cart.
*   removeFromCart: This function removes a product from the cart by filtering out the item with the specified productId.
*   updateCartQuantity: This function updates the quantity of a product in the cart.
*   calculateCartTotal: This function calculates the total amount of the cart by fetching the product prices from a data source (e.g., database) and multiplying them by the respective quantities.
*   Note: The fetchProductPrice function is a helper function that simulates fetching the product price from a data source. In a real application, you would replace this with your implementation to fetch the actual product prices.
*/

// Functions for managing the shopping cart

exports.addToCart = (cart, productId, quantity) => {
  // Check if the product is already in the cart
  const existingProductIndex = cart.items.findIndex(
    (item) => item.productId === productId
  );

  if (existingProductIndex !== -1) {
    // If the product is already in the cart, update the quantity
    cart.items[existingProductIndex].quantity += quantity;
  } else {
    // If the product is not in the cart, add it
    cart.items.push({ productId, quantity });
  }

  return cart;
};

exports.removeFromCart = (cart, productId) => {
  // Remove the product from the cart
  cart.items = cart.items.filter((item) => item.productId !== productId);

  return cart;
};

exports.updateCartQuantity = (cart, productId, quantity) => {
  // Calculate the total amount of the cart
  let total = 0;

  // biome-ignore lint/complexity/noForEach: <explanation>
  cart.items.forEach((item) => {
    // Fetch the product price from the database or other source
    const productPrice = fetchProductPrice(item.productId);
    total += productPrice * item.quantity;
  });

  return total;
};

// Helper function to fetch the product price (replace with your implementation)
const fetchProductPrice = (productId) => {
  // Implementation to fetch the product price from the database or other source
  return 10; // Dummy price for demonstration
};

