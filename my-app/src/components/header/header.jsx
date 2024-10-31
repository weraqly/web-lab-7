import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <h1>Mountain Equipment</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/cart">Card</Link>
      </nav>
      <input type="search" id="find_input" placeholder="Search equipment" />
    </header>
  );
};

export default Header;

