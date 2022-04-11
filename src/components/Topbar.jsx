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
  render() {
    return (
      <div className="topbar">
        <img src={logo} alt="LAKI's logo" className="logo" />
        <div className="topbar-right">
          <span>
            <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
          </span>
          <span>
            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
          </span>
          <span>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
          </span>
        </div>
      </div>
    );
  }
}

export default Topbar;
