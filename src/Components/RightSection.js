import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import "../RightSection.css"; // Ensure this contains styles for RightSection

const features = [
    "Deposit Checks Instantly",
    "A Powerful Open API",
    "Affiliates And Partnerships",
    "Coverage Around The World",
    "Business Without Borders",
    "Web Design",
  ];
  

const RightSection = () => {
  return (
    <section className="business-section">
      <div className="business-container right-layout">
        {/* Left Side - Image */}
        <motion.div 
          className="business-image-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={"/business.png"} alt="Business Growth" className="business-image" />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="business-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="business-title">Small to medium-sized businesses</h2>
          <p className="business-description">
          Our tailored solutions help small and medium-sized businesses simplify payments, enhance operations, and scale efficiently.
          </p>

          <ul className="business-features">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="feature-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CheckCircle size={24} className="feature-icon" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <motion.button
            className="business-btn"
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default RightSection;
