import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import env from "../scripts/Environment";
import style from "./css/auth.module.css";

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
    <div className={style.auth}>
      <div className={style.container}>
        <h2>Login</h2>
        <form onSubmit={onLoginSubmit}>
          <div>
            <div className={style.group}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError.length > 0 && (
                <div className={style.error}>
                  {emailError.map((error) => (
                    <span>{error}</span>
                  ))}
                </div>
              )}
            </div>
            <div className={style.group}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError.length > 0 && (
                <div className={style.error}>
                  {passwordError.map((error) => (
                    <span>{error}</span>
                  ))}
                </div>
              )}
            </div>
            <Link to="/forgot-password" className={style.forgot}>
              Forgot Password?
            </Link>
          </div>
          {formError && (
            <div className={style.error}>
              <span>{formError}</span>
            </div>
          )}
          <button type="submit" className={style.submit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
