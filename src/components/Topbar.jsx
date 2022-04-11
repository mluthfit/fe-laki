import React from "react";
import logo from "./images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faUser,
  faBell,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import "./css/topbar.css";

class Topbar extends React.Component {
  openUserDropdown = () => {
    const menuAccount = document.querySelector(".menu-account");
    if (!menuAccount) return;

    if (menuAccount.className === "menu-account closed") {
      menuAccount.className = "menu-account";
    } else {
      menuAccount.className = "menu-account closed";
    }
  };

  render() {
    return (
      <div className="topbar">
        <img src={logo} alt="LAKI's logo" className="logo" />
        <div className="topbar-right">
          <div className="company">
            <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
            <span>Creative Inc.</span>
          </div>
          <div className="users">
            <div className="notification">
              <span>
                <FontAwesomeIcon icon={faBell} size="lg"></FontAwesomeIcon>
              </span>
            </div>
            <div className="accounts">
              <span className="action-account" onClick={this.openUserDropdown}>
                <FontAwesomeIcon icon={faUser} size="lg"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faAngleDown} size="xs"></FontAwesomeIcon>
              </span>
              <div className="menu-account closed">
                <ul>
                  <li>Profile</li>
                  <li>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
