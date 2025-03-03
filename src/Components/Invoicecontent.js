import React from "react";
import "../Invoicingcontent.css"; 


const InvoicingContent = () => {
  return (
    <div className="invoicing-section">
      <h1 className="invoicing-title">GST Invoicing Software for All Businesses</h1>
      
      <div className="invoicing-content">
        <p>
          <strong>Kiva Pays</strong> offers online invoicing software that helps you craft beautiful invoices, 
          automatically send payment reminders, and get paid faster online. 
          Send and manage invoices from anywhere, anytime. Accept payments online.
        </p>

        <h3>Workflow Automation</h3>
        <p>
          Automate tedious recurring tasks, from invoicing workflows to payment reminders. 
          Sit back while <strong>Kiva Pays Invoice</strong> takes care of them automatically.
        </p>

        <h3>Easy Collaboration</h3>
        <p>
          Don't waste time with lengthy emails — communicate with your clients in real time. 
          Make deals, discuss prices, and negotiate terms and conditions all in one place - 
          the Client Portal of <strong>kivapays.com</strong>.
        </p>
      </div>

      <div className="invoicing-image">
        <img src={"/invoicing.jpg"} alt="Invoicing Process" />
      </div>
      <div className="signup-container">
      <a href="/signup" className="signup-button">Sign Up Now</a>
      </div>
    </div>
  );
};

export default InvoicingContent;
