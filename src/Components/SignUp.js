import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2 for beautiful alerts
import "../Signup.css"; // Updated CSS filename for clarity
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate=useNavigate();




  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { name, phone, company, email, username, password, confirmPassword } = formData;

    if (!name || !phone || !company || !email || !username || !password || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all required fields.",
        confirmButtonColor: "#1E88E5", // Customize button color
      });
      return;
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "Please make sure both passwords are identical.",
        confirmButtonColor: "#1E88E5", // Customize button color
      });
      return;
    }

    // Simulate successful form submission
    Swal.fire({
      icon: "success",
      title: "Registration Successful!",
      text: "Welcome to KivaPay. Your account has been created.",
      confirmButtonText: "Proceed to Dashboard",
      confirmButtonColor: "#1E88E5", // Customize button color
    }).then(() => {
      // Redirect or perform any action after successful registration (if needed)
      console.log("Form submitted:", formData);
      navigate("/login")

    });
  };

  return (
    <div className="register-container">
      <div className="register-image"></div>
      <div className="register-form-container">
        <div className="register-card">
          <h2 className="register-header">Welcome To KivaPay</h2>
          <p className="register-subtext">Open your KivaPay account now</p>
          <form onSubmit={handleSubmit} className="register-form">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company*"
              value={formData.company}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username*"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password*"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password*"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" className="register-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
