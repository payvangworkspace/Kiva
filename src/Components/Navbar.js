import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaChevronDown } from "react-icons/fa";


const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" style={{textDecoration:"none"}} >KivaPays</Link>

        <ul className="nav-menu">
          <li className="nav-item" onMouseEnter={() => toggleDropdown("product")} onMouseLeave={() => toggleDropdown(null)}>
            <span className="nav-link">Products <FaChevronDown className="dropdown-icon" /></span>
            <div className={`dropdown-menu ${activeDropdown === "product" ? "show" : ""}`}>
              <Link to="/payment-gateway">Payment Gateway</Link>
              <Link to="/invoices">Invoices</Link>
              <Link to="/virtual-account">Virtual Account</Link>
              <Link to="/white-label">White Label Solution</Link>
            </div>
          </li>

          <li className="nav-item" onMouseEnter={() => toggleDropdown("resources")} onMouseLeave={() => toggleDropdown(null)}>
            <span className="nav-link">Resources <FaChevronDown className="dropdown-icon" /></span>
            <div className={`dropdown-menu ${activeDropdown === "resources" ? "show" : ""}`}>
              <Link to="/features">Solutions & Features</Link>
              <Link to="/faqs">FAQ's</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
          </li>

          <li className="nav-item" onMouseEnter={() => toggleDropdown("company")} onMouseLeave={() => toggleDropdown(null)}>
            <span className="nav-link">Company <FaChevronDown className="dropdown-icon" /></span>
            <div className={`dropdown-menu ${activeDropdown === "company" ? "show" : ""}`}>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </li>

          <li className="nav-item"><Link to="/developers" className="nav-link">Developers</Link></li>
        </ul>

        <Link to="/login" className="login-btn" style={{textDecoration:"none"}}>
          <i className="fa-solid fa-circle-user fa-spin"></i> Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
