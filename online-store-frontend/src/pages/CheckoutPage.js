import React from 'react';
import CartSummary from '../components/cart/CartSummary';
import CartCheckout from '../components/cart/CartCheckout';

const CheckoutPage = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <CartSummary />
      <CartCheckout />
    </div>
  );
};

export default CheckoutPage;
