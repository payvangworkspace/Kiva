import React from 'react'
import { Link } from "react-router-dom";
import "../DeveloperBanner.css"; // Import the CSS file
 
 
export const DeveloperBanner = () => {
  return (
    <div className="developer-banner">
    <div className="overlay">
      <h1 className="feature-title">Integration for Developers</h1>
      <nav className="breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-separator">|</span>
        <span className="breadcrumb-current">Developers</span>
      </nav>
    </div>
  </div>
  )
}