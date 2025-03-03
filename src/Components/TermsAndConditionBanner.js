import React from 'react'
import { Link } from "react-router-dom";
import "../TermsAndConditionBanner.css"; 



export const TermsAndConditionBanner = () => {
  return (
    <div className="terms-banner">
    <div className="overlay">
      <h1 className="feature-title">Terms & Conditions</h1>
      <nav className="breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-separator">|</span>
        <span className="breadcrumb-current">Terms & Conditions</span>
      </nav>
    </div>
  </div>
  )
}
