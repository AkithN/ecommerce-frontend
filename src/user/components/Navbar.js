import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>E-commerce</h1>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
