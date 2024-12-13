// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <i className="fas fa-briefcase logo-icon"></i>
        <span className="logo-text">JobTracker</span>
      </div>
      <ul className="navbar-menu">
        <li className="menu-item">
          <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
        </li>
        <li className="menu-item">
          <Link to="/find-job" className="menu-link">Find Job</Link>
        </li>
        <li className="menu-item">
          <Link to="/dashboard" className="menu-link">Dashboard</Link>
        </li>
        <li className="menu-item">
          <Link to="/hiring" className="menu-link">Hiring</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <button className="search-button">
          <i className="fas fa-search"></i> Search
        </button>
        <i className="fas fa-user-circle"></i>
        <i className="fas fa-cog"></i>
      </div>
    </nav>
  );
}

export default Navbar;