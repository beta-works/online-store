import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import { createOrder } from '../../services/orderService';

const CartCheckout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const orderData = {
        userId: user.id,
        products: cartItems.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
        totalAmount: cartTotal,
      };

      await createOrder(orderData);
      clearCart();
      // Redirect to order confirmation page or show a success message
    } catch (err) {
      setError('Error processing your order. Please try again.');
      console.error('Error creating order:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart-checkout">
      <h2>Checkout</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <p>Total Amount: ${cartTotal}</p>
        <button onClick={handleCheckout} disabled={loading}>
          {loading ? 'Processing...' : 'Place Order'}
        </button>
      </div>
    </div>
  );
};

export default CartCheckout;
