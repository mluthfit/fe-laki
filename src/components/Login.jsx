import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import env from "../scripts/Environment";
import "./css/login.css";

const Login = (props) => {
  const { setLogged } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  const login = async () => {
    try {
      const authenticate = {
        email,
        password,
      };

      const { data } = await axios.post(
        `${env.API_URL}/auth/login`,
        authenticate
      );

      localStorage.setItem("token", data.access_token);
      setLogged(true);
      navigate("/dashboard");
    } catch (error) {
      const { data } = error.response;
      if (data.message) {
        setFormError(data.message);
      }

      if (data.validations) {
        setEmailError(data.validations.email);
        setPasswordError(data.validations.password);
      }
    }
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    login();
    clearInput();
  };

  return (
    <div className="login">
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={onLoginSubmit}>
          <div className="big-form-group">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError.length > 0 && (
                <div className="error-message">
                  {emailError.map((error) => (
                    <span>{error}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError.length > 0 && (
                <div className="error-message">
                  {passwordError.map((error) => (
                    <span>{error}</span>
                  ))}
                </div>
              )}
            </div>
            <Link to="/forgot-password" className="link-forgot">
              Forgot Password?
            </Link>
          </div>
          {formError && (
            <div className="error-message">
              <span>{formError}</span>
            </div>
          )}
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
