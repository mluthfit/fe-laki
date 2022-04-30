import React from "react";
import style from "./css/auth.module.css";

class ForgotPassword extends React.Component {
  render() {
    return (
      <div className={style.auth}>
        <div className={style.container}>
          <h2>Forgot Password</h2>
          <form>
            <div>
              <div className={style.group}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
            </div>
            <button type="submit" className={style.submit}>
              Send Email
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
