import React from "react";
import { Link } from "react-router-dom";
import '../ContactUsBanner.css';

const ContactUsBanner = () => {
  return (
    <div className="contactus-banner">
      <div className="overlay">
        <h1 className="contactus-title">Contact Us</h1>
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">|</span>
          <span className="breadcrumb-current">Contact Us</span>
        </nav>
      </div>
    </div>
  );
};

export default ContactUsBanner;
