import React, { useState } from "react";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate(); // Used for navigation

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setEmailError("Username or email address is required.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input
    if (!email || password.length < 6) {
      if (!email) setEmailError("Username or email address is required.");
      if (password.length < 6) setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    // Successful form submission, redirect to home page
    console.log("Form Submitted", { email, password });
    navigate("/home"); // Redirect to home page
  };

  const redirectToSignUp = () => {
    navigate("/signup"); // Redirect to Sign-Up page
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h2>Welcome to <span className="brand-name">Job Application Tracker</span></h2>
        <h1>Sign in</h1>
        <div className="social-signin">
          <button className="google-signin">
            <FcGoogle size={20} style={{ marginRight: "10px" }} />
            <span className="google-text">Continue with Google</span>
          </button>
          <button className="facebook-signin">
            <FaFacebookF size={20} style={{ marginRight: "10px" }} />
            Sign in with Facebook
          </button>
          <button className="apple-signin">
            <FaApple size={20} style={{ marginRight: "10px" }} />
            Sign in with Apple
          </button>
        </div>
        <form className="signin-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Enter your username or email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Username or email address"
          />
          {emailError && <div className="error-message">{emailError}</div>}

          <label htmlFor="password">Enter your Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          {passwordError && <div className="error-message">{passwordError}</div>}

          <a href="#" className="forgot-password">Forgot Password?</a>
          <button className="signin-button" type="submit">Sign in</button>
        </form>
        <p className="signup-link">
          No Account? <span onClick={redirectToSignUp} style={{ color: "#007bff", cursor: "pointer" }}>Sign-up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
