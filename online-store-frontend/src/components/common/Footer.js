import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Online Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
