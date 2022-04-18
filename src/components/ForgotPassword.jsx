import React from "react";
import "./css/forgotpass.css";

class ForgotPassword extends React.Component {
    render() {
        return (
            <div className="centered">
                <h2 className="form-title">Forgot Password</h2>
                <form action="#" method="post">
                    <table>
                        <tr><td/><td/></tr>
                        <tr>
                            <td></td>
                            <td className="title">Email</td>
                        </tr>
                        <tr>
                            <td><div className="circle"></div></td>
                            <td><input className="field" type={"text"} name="" /></td>
                        </tr>
                        <tr><td/><td/></tr>
                    </table>


                    <div className="button-location">
                        <input className="submit-button" type={"submit"} value="Send Email" />
                    </div>
                </form>
            </div>
        )
    }
}

export default ForgotPassword;