import React from "react";
import Profile from "./Profile";
import style from "./css/show-profile.module.css";

class ShowProfile extends React.Component {
  user = {
    email: "kendrick.susanto@example.com",
    name: "Kendrick Lamar Susanto",
    position: "Finance Manager",
    company: "Land Croc Inc.",
  };

  render() {
    return (
      <div className={style.show}>
        <div className={style.profile}>
          <Profile data={this.user}></Profile>
        </div>
        <div className={style.form}>
          <div className={style.big}>
            <h3>EDIT PROFILE</h3>
            <form>
              <div className={style.group}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className={style.group}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <button type="submit" className={style.submit}>
                SAVE
              </button>
            </form>
          </div>
          <div className={style.big}>
            <h3>EDIT PASSWORD</h3>
            <form>
              <div className={style.group}>
                <label htmlFor="old-password">Old Password</label>
                <input type="password" id="old-password" />
              </div>
              <div className={style.group}>
                <label htmlFor="new-password">New Password</label>
                <input type="password" id="new-password" />
              </div>
              <div className={style.group}>
                <label htmlFor="confirm-new-password">
                  Confirm New Password
                </label>
                <input type="password" id="confirm-new-password" />
              </div>
              <button type="submit" className={style.submit}>
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
