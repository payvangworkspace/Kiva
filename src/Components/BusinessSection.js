import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import "../BusinessSection.css"; // Updated CSS file

const features = [
    "International Payments",
    "Request Features",
    "Premium Support",
    "Direct Debit",
    "Automated Accounting",
    "Web Design",
  ];
  
const BusinessSection = () => {
  return (
    <section className="business-section">
      <div className="business-container">
        {/* Left Side - Content */}
        <motion.div
          className="business-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="business-title">A fully integrated suite for Large enterprise</h2>
          <p className="business-description">
          Our financial solutions help large enterprises streamline transactions, automate operations, and expand globally with confidence.
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

          <motion.button className="business-btn" whileHover={{ scale: 1.05 }}>
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Side - Circular Image */}
        <motion.div 
          className="business-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={"/enterprise.png"} alt="Business Growth" className="business-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSection;
