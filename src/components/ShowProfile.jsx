import React from "react";
import Profile from "./Profile";
import "./css/show-profile.css";

// error tidak bisa ditampilkan
class ShowProfile extends React.Component {
  render() {
    return (
      <div className="show-profile">
        <div className="down">
          <Profile></Profile>
          <div className="menu-show-profile">
            <div className="content-menu">
              <h2 className="form-title">EDIT PROFILE</h2>
              <form action="#" className="form-pos" method="post">
                <table>
                  <tr>
                    <td></td>
                    <td className="title">Nama</td>
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
                </table>

                <div className="flex-container">
                  <div>
                    <input className="button" type={"submit"} value="Save" />
                  </div>
                </div>
              </form>
            </div>

            <div className="content-menu">
              <h2 className="form-title">CHANGE PASSWORD</h2>
              <form action="#" method="post">
                <table>
                  <tr>
                    <td></td>
                    <td className="title">Old Password</td>
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
                    <td className="title">Confirm New Password</td>
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

                <div className="flex-container">
                  <div>
                    <input className="button" type={"submit"} value="Save" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowProfile;
