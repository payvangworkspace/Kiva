import { useState } from "react";
import "../Signup.css"; // Updated CSS filename for clarity

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "", phone: "", company: "", email: "", username: "", password: "", confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="register-container">
      <div className="register-image"></div>
      <div className="register-form-container">
        <div className="register-card">
          <h2 className="register-header">Welcome To KivaPay</h2>
          <p className="register-subtext">Open your KivaPay account now</p>
          <form onSubmit={handleSubmit} className="register-form">
            <input type="text" name="name" placeholder="Name*" value={formData.name} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone*" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="company" placeholder="Company*" value={formData.company} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address*" value={formData.email} onChange={handleChange} required />
            <input type="text" name="username" placeholder="Username*" value={formData.username} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password*" value={formData.password} onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password*" value={formData.confirmPassword} onChange={handleChange} required />
            <button type="submit" className="register-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
