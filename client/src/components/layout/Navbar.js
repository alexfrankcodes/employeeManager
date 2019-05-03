import React from "react";
import { Link } from "react-router-dom";

// Navbar component that will be displayed on every page
const Navbar = () => (
  <nav className="navbar bg-dark">
    <h1>
      <Link to="/">
        <i className="fas fa-walking" /> EmStar
      </Link>
    </h1>
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
