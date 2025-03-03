import React from "react";
import "../PrivacyPolicy.css"; // Import external CSS

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-text">
        <strong>'PayVang' India</strong> ensures that your privacy is protected and secured. We use your personal data only as outlined in this policy.
      </p>
      
      <h2 className="privacy-heading">Information Required:</h2>
      <ul className="privacy-list">
        <li>Name, designation, and contact information (including email, business details, etc.)</li>
        <li>Demographic data (postcode, preferences, interests)</li>
        <li>Relevant application information</li>
      </ul>

      <h2 className="privacy-heading">Why does PayVang collect your information?</h2>
      <div className="privacy-section">
        <div>
          <strong>To personalize user experience:</strong>
          <p>Understanding how users interact with our platform helps us improve services.</p>
        </div>
        <div>
          <strong>To improve customer service:</strong>
          <p>We use your information to respond effectively to inquiries and support requests.</p>
        </div>
        <div>
          <strong>To process your application:</strong>
          <p>We analyze your business profile to approve or decline applications.</p>
        </div>
        <div>
          <strong>For marketing purposes:</strong>
          <p>Your data may be used for promotional activities, offers, and advertisements.</p>
        </div>
        <div>
          <strong>To send periodic emails:</strong>
          <p>We send updates, company news, and relevant product or service information.</p>
        </div>
      </div>

      <h2 className="privacy-heading">PayVang Security & Data Storage</h2>
      <p className="privacy-text">
        Data is stored securely with **256-bit SSL encryption**. Third-party verification is used to prevent fraud.
      </p>

      <h2 className="privacy-heading">Internet Cookies</h2>
      <p className="privacy-text">
        Cookies enhance your browsing experience. Users can accept or decline cookies as per their preference.
      </p>

      <h2 className="privacy-heading">Third-Party Websites</h2>
      <p className="privacy-text">
        We are not responsible for external links' content or privacy practices.
      </p>

      <h2 className="privacy-heading">Updating Your Information</h2>
      <p className="privacy-text">
        If your personal or professional details change, update them through our contact page.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
