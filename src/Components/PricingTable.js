import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../PricingTable.css';

const pricingData = [
  {
    title: 'Startup',
    price: 'Free',
    setupFee: 'Setup Fees: Free',
    features: [
      'All Major Credit Cards (Domestic) - 2.00%',
      'Debit Cards (Domestic) - 2.00%',
      'Wallets (10+ options) - 2.00%',
      'Netbanking (40+ options) - 2.00%',
      'UPI - 2.00%',
      'American Express, JCB - 3.20%',
      'Settlement - T+2',
      'AMC - ₹2500'
    ],
  },
  {
    title: 'Premium',
    price: '₹20,000',
    setupFee: 'Setup Fees: ₹20,000',
    features: [
      'All Major Credit Cards (Domestic) - 1.90%',
      'Debit Cards (Domestic) - 1.50%',
      'Wallets (10+ options) - 1.90%',
      'Netbanking (40+ options) - 1.85%',
      'UPI - 1.25%',
      'American Express, JCB - 2.90%',
      'Settlement - T+1',
      'AMC - ₹2500'
    ],
  },
  {
    title: 'Enterprise',
    price: 'Write to Us',
    setupFee: 'Setup Fees: Contact Us',
    features: [
      'All Major Credit Cards (Domestic) - 1.85%',
      'Debit Cards (Domestic) - 1.25%',
      'Wallets (10+ options) - 1.85%',
      'Netbanking (40+ options) - 1.75%',
      'UPI - 1.00%',
      'American Express, JCB - 2.75%',
      'Settlement - Same Day',
      'AMC - ₹2500'
    ],
  },
];

const PricingTable = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-container">
        {pricingData.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">{plan.price}</p>
            <p className="setup-fee">{plan.setupFee}</p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="feature-icon" /> {feature}
                </li>
              ))}
            </ul>
            <button className="btn-get-started">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
