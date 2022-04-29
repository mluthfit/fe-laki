import React from "react";
import { capitalize } from "../scripts/Text";
import "./css/profile.css";

const Profile = (props) => {
  const { data, status } = props;

  return (
    <div className="profile">
      <span className="title">Employee Profile</span>
      <div className="content">
        <div className="logo-profile">
          <img src="https://via.placeholder.com/150" alt="logo" />
        </div>
        <div className="info-profile">
          {Object.keys(data).map((key, index) => {
            return (
              <div key={index} className="profile-item">
                <span className="key">{capitalize(key)}</span>
                <span className="value">{data[key]}</span>
              </div>
            );
          })}
          {status && (
            <div className="status-bar">
              <span className={status === "Online" ? "online" : "offline"}>
                {status}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
