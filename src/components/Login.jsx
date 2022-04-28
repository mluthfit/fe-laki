import React from "react";
import { Link } from "react-router-dom";
import "./css/login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="container">
          <h2>Login</h2>
          <form>
            <div className="big-form-group">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <Link to="/forgot-password" className="link-forgot">
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
