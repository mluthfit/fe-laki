import React from "react";
import "./css/reset-pass.css";

class ResetPassword extends React.Component {
  render() {
    return (
      <div className="reset-password">
        <h2 className="form-title">Reset Password</h2>
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
              <td className="title">New Password</td>
            </tr>
            <tr>
              <td>
                <div className="circle"></div>
              </td>
              <td>
                <input className="field" type={"Password"} name="" />
              </td>
            </tr>
            <tr>
              <td />
              <td />
            </tr>
            <tr>
              <td></td>
              <td className="title">Confirm Password</td>
            </tr>
            <tr>
              <td>
                <div className="circle"></div>
              </td>
              <td>
                <input className="field" type={"Password"} name="" />
              </td>
            </tr>
            <tr>
              <td />
              <td />
            </tr>
          </table>

          <div className="button-location">
            <input
              className="submit-button"
              type={"submit"}
              value="Send Email"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ResetPassword;
