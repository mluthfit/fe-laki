import React from "react";
import "./css/sidebar.css";

class Sidebar extends React.Component {
  openDropdown = (e) => {
    let dropdown = document.getElementById(e.target.id + "-child");
    if (dropdown.className === "dropdown-child closed") {
      dropdown.className = "dropdown-child open";
    } else {
      dropdown.className = "dropdown-child closed";
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
          <li id="superusers" className="dropdown" onClick={this.openDropdown}>
            SuperUser
          </li>
          <ul id="superusers-child" className="dropdown-child closed">
            <li>Employee Details</li>
            <li>Employee Accounts</li>
          </ul>

          <li id="admins" className="dropdown" onClick={this.openDropdown}>
            Admin
          </li>
          <ul id="admins-child" className="dropdown-child closed">
            <li>SuperUsers List</li>
            <li>Companies List</li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
