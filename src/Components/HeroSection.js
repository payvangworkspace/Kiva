import React from "react";
import "../HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Powering the Future of Payments</h1>
        <p>
          Secure, fast, and seamless transactions designed for your business growth.
        </p>
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
