import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="logo">Leggo</h3>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Book</Link></li> 
        <li><Link to="/cart">Cart</Link></li> 
        <li><Link to="/pegawai">Pegawai</Link></li> 
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      
    </nav>
  );
};

export default Navbar;
