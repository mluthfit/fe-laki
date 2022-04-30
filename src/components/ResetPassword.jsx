import React from "react";
import style from "./css/auth.module.css";

class ResetPassword extends React.Component {
  render() {
    return (
      <div className={style.auth}>
        <div className={style.container}>
          <h2>Reset Password</h2>
          <form>
            <div>
              <div className={style.group}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={style.group}>
                <label htmlFor="email">New Password</label>
                <input type="email" id="email" />
              </div>
              <div className={style.group}>
                <label htmlFor="email">Confirm Password</label>
                <input type="email" id="email" />
              </div>
            </div>
            <button type="submit" className={style.submit}>
              Change Password
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
