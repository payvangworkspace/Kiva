import React from "react";
import { Link } from "react-router-dom";
import "../Faqs.css"; 
export const Faqs = () => {
  return (
   <div className="faq-banner">
       <div className="overlay">
         <h1 className="feature-title">FAQs</h1>
         <nav className="breadcrumb">
           <Link to="/" className="breadcrumb-link">Home</Link>
           <span className="breadcrumb-separator">|</span>
           <span className="breadcrumb-current">FAQs</span>
         </nav>
       </div>
     </div>
  )
}
