import React from "react";
import Profile from "./Profile";
import "./css/show-profile.css";

// error tidak bisa ditampilkan
class ShowProfile extends React.Component {
  user = {
    email: "kendrick.susanto@example.com",
    name: "Kendrick Lamar Susanto",
    position: "Finance Manager",
    company: "Land Croc Inc.",
  };

  render() {
    return (
      <div className="show-profile">
        <Profile data={this.user}></Profile>
        <div className="dual-form">
          <div className="form-big-group">
            <h3>EDIT PROFILE</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <button type="submit" className="submit-btn">
                SAVE
              </button>
            </form>
          </div>
          <div className="form-big-group">
            <h3>EDIT PASSWORD</h3>
            <form>
              <div className="form-group">
                <label htmlFor="old-password">Old Password</label>
                <input type="password" id="old-password" />
              </div>
              <div className="form-group">
                <label htmlFor="new-password">New Password</label>
                <input type="password" id="new-password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-new-password">
                  Confirm New Password
                </label>
                <input type="password" id="confirm-new-password" />
              </div>
              <button type="submit" className="submit-btn">
                SAVE
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowProfile;
