import React from 'react';
import { useCart } from '../../hooks/useCart';

const CartSummary = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <div>
        <p>Total Items: {cartItems.length}</p>
        <p>Total Amount: ${cartTotal}</p>
      </div>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CartSummary;
