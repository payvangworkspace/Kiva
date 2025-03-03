import React from 'react'

import { Link } from "react-router-dom";
import "../PricingMiddle.css"; // Import the CSS file
export const PricingMiddle = () => {
  return (
    <div className="pricing-banner">
    <div className="overlay">
      <h1 className="feature-title">Pricing</h1>
      <nav className="breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-separator">|</span>
        <span className="breadcrumb-current">Pricing</span>
      </nav>
    </div>
  </div>
  )
}
