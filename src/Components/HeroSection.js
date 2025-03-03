import React from "react";
import "../HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate=useNavigate();

  const redirectToPaymentGateway=()=>{
    navigate("/payment-gateway")
  }


  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Powering the Future of Payments</h1>
        <p>
          Secure, fast, and seamless transactions designed for your business growth.
        </p>
        <button className="hero-btn" onClick={redirectToPaymentGateway}>Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
