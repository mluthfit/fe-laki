import React from "react";
import "./css/forgot-pass.css";

class ForgotPassword extends React.Component {
  render() {
    return (
      <div className="forgot-password">
        <div className="container">
          <h2>Forgot Password</h2>
          <form>
            <div className="big-form-group">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Send Email
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
