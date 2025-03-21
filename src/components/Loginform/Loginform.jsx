import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./LoginForm.css";

const LoginForm = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    toast.error("Login functionality is not live yet");
  };

  return (
    <section className="login-form">
      <div className="login-container">
        <div className="login-wrapper">
          <header className="login-header">
            <h1>Sign In</h1>
            <p>
              New User?{" "}
              <Link to="/registration" className="create-account-link">
                Create an account
              </Link>
            </p>
          </header>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone No
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-input"
                aria-label="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                aria-label="Enter your password"
                required
              />
            </div>
            <p className="forgot-password">
              Forgot Password?{" "}
              <Link to="/forgot-password" className="forgot-password-link">
                Click here to reset
              </Link>
            </p>
            <button type="submit" className="submit-button">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
