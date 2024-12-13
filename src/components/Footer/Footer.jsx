import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <i className="fas fa-briefcase logo-icon"></i> {/* JobTracker Icon */}
        <span className="footer-logo-text">JobTracker</span>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="footer-right">
        <p>© 2024 JobTracker. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
