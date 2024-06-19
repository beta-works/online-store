import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Online Store</h1>
      <p>Browse our wide selection of products.</p>
      <Link to="/products" className="btn">
        View Products
      </Link>
    </div>
  );
};

export default HomePage;
