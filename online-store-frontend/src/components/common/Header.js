import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

const Header = () => {
  const { cartItems } = useCart();

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">Online Store</Link>
        </div>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart ({cartItems.length})
            </Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
