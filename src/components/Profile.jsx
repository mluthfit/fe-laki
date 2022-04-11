import React from "react";
import "./css/profile.css";

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <span className="title">Employee Profile</span>
        <div className="content">
          <div className="logo-profile">
            <img src="https://via.placeholder.com/150" alt="logo" />
          </div>
          <div>
            <span className="name">Email</span>
            <span className="value">kendrick.susanto@example.com</span>
          </div>
          <div>
            <span className="name">Name</span>
            <span className="value">Kendrick Lamar Susanto</span>
          </div>
          <div>
            <span className="name">Title</span>
            <span className="value">Finance Manager</span>
          </div>
          <div>
            <span className="name">Company</span>
            <span className="value">Land Croc Inc.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
