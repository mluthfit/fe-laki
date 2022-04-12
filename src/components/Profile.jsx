import React from "react";
import "./css/profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.isStatus = props?.isStatus;
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
      <div className="profile">
        <span className="title">Employee Profile</span>
        <div className="content">
          <div className="logo-profile">
            <img src="https://via.placeholder.com/150" alt="logo" />
          </div>
          {Object.keys(this.data).map((key, index) => {
            return (
              <div key={index} className="profile-item">
                <span className="key">{this.capitalize(key)}</span>
                <span className="value">{this.data[key]}</span>
              </div>
            );
          })}
          {this.isStatus && (
            <div className="statusBar">
              <span>{this.isStatus}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Profile;
