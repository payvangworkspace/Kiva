import React from "react";
import "../ContactForm.css"; 

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div id="contact-card">
        {/* Left Illustration */}
        <div className="illustration">
          <img src="/contact-comment.png" alt="Illustration" className="illustration-img" />
        </div>

        {/* Right Form Section */}
        <div className="form-section">
          <h2 className="form-title">Leave A Message</h2>
          <p className="form-description">
            Drop us a note if you have questions about our services, or if you
            want to partner with us.
          </p>
          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="Name*" className="input-field" />
              <input type="email" placeholder="Email*" className="input-field" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Phone*" className="input-field" />
              <input type="text" placeholder="Subject*" className="input-field" />
            </div>
            <textarea
              placeholder="Your Message*"
              className="input-field textarea"
            ></textarea>
            <button className="submit-button">
              Send A Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
