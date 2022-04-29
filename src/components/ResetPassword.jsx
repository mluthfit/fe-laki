import React from "react";
import "./css/reset-pass.css";

class ResetPassword extends React.Component {
  render() {
    return (
      <div className="reset-password">
        <div className="container">
          <h2>Reset Password</h2>
          <form>
            <div className="big-form-group">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="email">New Password</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Confirm Password</label>
                <input type="email" id="email" />
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Change Password
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
