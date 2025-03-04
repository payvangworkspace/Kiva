import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../ContactSection.css";

const contactDetails = [
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    info: "info@kivapays.com",
    subtitle: "Support 24/7",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    info: "(+256) 777 007880",
    subtitle: "Free Consultation",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Us",
    info: "BIFRO HOUSE Plot No: 24B, 1st Floor Suite No. 7",
    subtitle: "Kampala, Uganda",
  },
];

const ContactSection = () => {
  return (
    <section className="contact-section">
      {contactDetails.map((item, index) => (
        <div className="contact-card" key={index}>
          <div className="icon">{item.icon}</div>
          <div className="contact-info">
            <h3>{item.title}</h3>
            <p className="contact-main">{item.info}</p>
            <p className="contact-sub">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ContactSection;
