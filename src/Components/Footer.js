import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>KivaPays</h2>
          <p>
            Make it easy and secure for your customers to make online payments with one of the most reliable and cost-effective payment gateways.
          </p>
        </div>

        <div className="footer-links">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Our Pricing</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Address</h3>
          <p>11/12 West Patel Nagar, New Delhi, 110008</p>
          <p>Email: <a href="mailto:info@payvang.com">info@payvang.com</a></p>
          <p>Phone: (+91) 011-45128901 / 02</p>
        </div>

        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 KivaPays. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

// CSS (Separate file: Footer.css)
const styles = `
.footer {
  background: #111;
  color: #fff;
  padding: 3rem 2rem;
  text-align: center;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.footer-brand h2 {
  color: #78c257;
  font-size: 1.8rem;
}

.footer-brand p {
  font-size: 1rem;
  color: #ccc;
  margin-top: 0.5rem;
}

.footer-links h3, .footer-contact h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin-bottom: 0.5rem;
}

.footer-links ul li a {
  color: #bbb;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links ul li a:hover {
  color: #78c257;
}

.footer-contact p {
  font-size: 0.9rem;
  color: #ccc;
}

.footer-contact a {
  color: #78c257;
  text-decoration: none;
}

.footer-socials {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.footer-socials a {
  color: #78c257;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.footer-socials a:hover {
  transform: scale(1.2);
}

.footer-bottom {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #bbb;
}
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
