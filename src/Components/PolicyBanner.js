import React from "react";
import { Link } from "react-router-dom";
import '../PolicyBanner.css';

const PolicyBanner = () => {
  return (
    <div className="privacypolicy-banner">
      <div className="overlay">
        <h1 className="privacypolicy-title">Privacy Policy</h1>
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">|</span>
          <span className="breadcrumb-current">Privacy Policy</span>
        </nav>
      </div>
    </div>
  );
};

export default PolicyBanner;