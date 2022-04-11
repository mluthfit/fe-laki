import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCamera,
  faTasks,
  faInfoCircle,
  faUserLock,
  faUserCog,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./css/sidebar.css";

class Sidebar extends React.Component {
  openDropdown = function (e) {
    const child = e.target.querySelector(".dropdowns");
    const arrow = e.target.querySelector(".arrow-dropdown");
    if (!child) return;

    if (child.className === "dropdowns") {
      child.className = "dropdowns open";
      arrow.className = "arrow-dropdown open";
    } else {
      child.className = "dropdowns";
      arrow.className = "arrow-dropdown";
    }
  };

  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            <span>Home</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
            <span>Presences</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>
            <span>Tasks</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
            <span>Employee</span>
          </li>
          <li onClick={this.openDropdown} className="parent-dropdown">
            <FontAwesomeIcon icon={faUserLock}></FontAwesomeIcon>
            <span>SuperUser</span>
            <span className="arrow-dropdown">
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </span>
            <ul className="dropdowns">
              <li>Employee Details</li>
              <li>Employee Accounts</li>
            </ul>
          </li>
          <li onClick={this.openDropdown} className="parent-dropdown">
            <FontAwesomeIcon icon={faUserCog}></FontAwesomeIcon>
            <span>Admin</span>
            <span className="arrow-dropdown">
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </span>
            <ul className="dropdowns">
              <li>SuperUser List</li>
              <li>Company List</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
