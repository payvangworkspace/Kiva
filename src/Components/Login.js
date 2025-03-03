import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "../Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="kiva-login-container">
      <div className="kiva-login-box">
        <h2 className="kiva-heading">Welcome Back</h2>
        <p className="kiva-subheading">Login to your Kiva Pays account</p>
        <form onSubmit={handleSubmit}>
          <div className="kiva-input-container">
            <FaUser className="kiva-icon" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="kiva-input-container">
            <FaLock className="kiva-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="kiva-login-btn">Login</button>
        </form>
        <p className="kiva-forgot">
          <a href="#">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
