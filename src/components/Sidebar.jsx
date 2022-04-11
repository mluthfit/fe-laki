import React from "react";
import "./css/sidebar.css";

class Sidebar extends React.Component {
  openDropdown = function (e) {
    const child = e.target.querySelector(".dropdowns");
    if (child?.className === "dropdowns") {
      child.className = "dropdowns open";
    } else {
      child.className = "dropdowns";
    }
  };

  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>Home</li>
          <li>Presence</li>
          <li>Task</li>
          <li>Employee</li>
          <li onClick={this.openDropdown}>
            SuperUser
            <ul className="dropdowns">
              <li>Employee Details</li>
              <li>Employee Accounts</li>
            </ul>
          </li>
          <li onClick={this.openDropdown}>
            Admin
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
