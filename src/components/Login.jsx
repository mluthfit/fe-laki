import React from "react";
import "./css/login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="centered">
        <h2 className="form-title">Login</h2>
        <form action="#" method="post">
          <table>
            <tr>
              <td></td>
              <td className="title">Email</td>
            </tr>
            <tr>
              <td>
                <div className="circle"></div>
              </td>
              <td>
                <input className="field" type={"text"} name="" />
              </td>
            </tr>
            <tr>
              <td />
              <td />
            </tr>
            <tr>
              <td></td>
              <td className="title">Password</td>
            </tr>
            <tr>
              <td>
                <div className="circle"></div>
              </td>
              <td>
                <input className="field" type={"password"} name="" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="forgot-align">
                <a className="forgot-text" href="">
                  Forgot Password?
                </a>
              </td>
            </tr>
          </table>

          <div className="button-location">
            <input className="submit-button" type={"submit"} value="Login" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;