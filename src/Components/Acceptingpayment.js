import React from "react";
import "../Acceptingpayment.css";
// import paymentImage from "../public/paymentgate.jpg";

const AcceptingPayment = () => {
  return (
    <div className="payment-section">
      <h1 className="payment-title">
        The One-Stop Solution For Accepting Payments Online
      </h1>
      <div className="payment-content">
        <p>
          Payment gateway is software that authorizes payment for online
          merchants, e-businesses. It performs the important role in processing
          and authorizing the payment or transaction between customer and
          merchants.
        </p>
        <p>
          Payment gateways encrypt sensitive information and details of payment
          such as credit card numbers. It is to guarantee that the information
          is passed securely between customer and merchant.
        </p>
        <ul>
          <li>
            Widest range of payment options: Debit & credit card, Net banking,
            Mobile Wallet, UPI & EMI.
          </li>
          <li>
            A high-speed, <strong>"Fast & Fluid Checkout"</strong> experience
            with zero redirect.
          </li>
          <li>Pay via QR Code, SMS, Web Link.</li>
          <li>
            Transparent and timely <strong>"Payvang Settlement"</strong> and
            payouts.
          </li>
          <li>
            Comprehensive MIS Reporting and Insights with Live Dashboard.
          </li>
        </ul>
      </div>
      <div className="payment-image">
      <img src={"/paymentgate.jpg"} alt="Payment Process" />
      </div>
      <div className="signup-container">
      <a href="/signup" className="signup-button">Sign Up Now</a>
      </div>
    </div>
  );
};

export default AcceptingPayment;