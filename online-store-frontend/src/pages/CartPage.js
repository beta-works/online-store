import React from 'react';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import CartCheckout from '../components/cart/CartCheckout';
import { useCart } from '../hooks/useCart';

const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.productId} item={item} />
            ))}
          </div>
          <CartSummary />
          <CartCheckout />
        </div>
      )}
    </div>
  );
};

export default CartPage;
