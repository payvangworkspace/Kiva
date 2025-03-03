import React from "react";
import { Link } from "react-router-dom";
import "../Paymentgateway.css"; 

export const PaymentGateway = () => {
  return (
   <div className="paymentgateway-banner">
       <div className="overlay">
         <h1 className="feature-title">Payment Gateway</h1>
         <nav className="breadcrumb">
           <Link to="/" className="breadcrumb-link">Home</Link>
           <span className="breadcrumb-separator">|</span>
           <span className="breadcrumb-current">Payment Gateway</span>
         </nav>
       </div>
     </div>
  )
}   