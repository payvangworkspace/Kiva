import React from "react";
import { Link } from "react-router-dom";
import "../Whitelabel.css"; 

export const Whitelabel = () => {
  return (
   <div className="whitelabel-banner">
       <div className="overlay">
         <h1 className="feature-title">White Label Solution </h1>
         <nav className="breadcrumb">
           <Link to="/" className="breadcrumb-link">Home</Link>
           <span className="breadcrumb-separator">|</span>
           <span className="breadcrumb-current">White Lable Solution</span>
         </nav>
       </div>
     </div>
  )
}