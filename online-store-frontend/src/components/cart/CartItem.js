import React from 'react';
import { useCart } from '../../hooks/useCart';

const CartItem = ({ item }) => {
  const { updateCartItemQuantity, removeCartItem } = useCart();

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    updateCartItemQuantity(item.productId, quantity);
  };

  const handleRemoveItem = () => {
    removeCartItem(item.productId);
  };

  return (
    <div className="cart-item">
      <div className="item-info">
        <img src={item.product.imageUrl} alt={item.product.name} />
        <div>
          <h3>{item.product.name}</h3>
          <p>Price: ${item.product.price}</p>
        </div>
      </div>
      <div className="item-quantity">
        <label htmlFor={`quantity-${item.productId}`}>Quantity:</label>
        <input
          type="number"
          id={`quantity-${item.productId}`}
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className="item-total">
        <p>Total: ${item.product.price * item.quantity}</p>
      </div>
      <button type="button" className="remove-item" onClick={handleRemoveItem}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
