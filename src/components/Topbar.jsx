import React from "react";
import logo from "./images/logo.png";
import "./css/topbar.css";

class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <img src={logo} alt="LAKI's logo" className="logo" />
        <div className="topbar-right">
          <span>Location</span>
          <span>Notification</span>
          <span>Account</span>
        </div>
      </div>
    );
  }
}

export default Topbar;
