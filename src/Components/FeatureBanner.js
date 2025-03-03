import React from "react";
import { Link } from "react-router-dom";
import "../FeatureBanner.css"; 

const FeatureBanner = () => {
  return (
    <div className="feature-banner">
      <div className="overlay">
        <h1 className="feature-title">Features</h1>
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">|</span>
          <span className="breadcrumb-current">Features</span>
        </nav>
      </div>
    </div>
  );
};

export default FeatureBanner;
