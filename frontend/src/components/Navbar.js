/* src/components/Navbar.js */
import React from 'react';
import { Link } from 'react-router-dom';  /* This is for navigation between pages */

const Navbar = () => (
  <nav className="navbar">
    <h1>Table Talk</h1>
    <div className="links">
      <Link to="/">Home</Link>  {/* Link to the homepage */}
      <Link to="/create">Create Recipe</Link>  {/* Link to the create recipe page */}
    </div>
  </nav>
);

export default Navbar;
