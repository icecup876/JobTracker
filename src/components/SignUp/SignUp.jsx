import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  // State for errors
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [contactError, setContactError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const redirectToSignIn = () => {
    navigate("/signin");
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate inputs
    let isValid = true;

    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!username) {
      setUsernameError("Username is required.");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (!contact) {
      setContactError("Contact number is required.");
      isValid = false;
    } else if (!/^\d{10}$/.test(contact)) {
      setContactError("Enter a valid 10-digit contact number.");
      isValid = false;
    } else {
      setContactError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      console.log("Sign Up form submitted!");
      navigate("/home"); // Redirect to Home page
    }
  };

  return (
    <div className="container">
      <div className="form-header">
        <h1>
          Welcome to <span className="brand-name">Job Application Tracker</span>
        </h1>
        <p>
          Have an Account?{" "}
          <span
            onClick={redirectToSignIn}
            style={{ color: "#007bff", cursor: "pointer" }}
          >
            Sign in
          </span>
        </p>
      </div>
      <form className="form" onSubmit={handleSignUpSubmit}>
        <h2>Sign up</h2>

        <label htmlFor="email">Enter your username or email address</label>
        <input
          type="email"
          id="email"
          placeholder="Username or email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <div className="error-message">{emailError}</div>}

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="username">User name</label>
            <input
              type="text"
              id="username"
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && <div className="error-message">{usernameError}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact Number</label>
            <input
              type="tel"
              id="contact"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            {contactError && <div className="error-message">{contactError}</div>}
          </div>
        </div>

        <label htmlFor="password">Enter your Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <div className="error-message">{passwordError}</div>}

        <button type="submit" className="btn">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
