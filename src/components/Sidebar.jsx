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

const Sidebar = (props) => {
  const { onChangePage, isMenuOpen } = props;
  const onToggleSidebar = (event) => {
    event.stopPropagation();
    const child = event.target.querySelector(".dropdowns");
    const arrow = event.target.querySelector(".arrow-dropdown");
    if (!child) return;

    child.classList.toggle("open");
    arrow.classList.toggle("open");
  };

  return (
    <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
      <ul>
        <li onClick={() => onChangePage("home")}>
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
          <span>Home</span>
        </li>
        <li onClick={() => onChangePage("presence")}>
          <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
          <span>Presences</span>
        </li>
        <li onClick={() => onChangePage("tasks")}>
          <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>
          <span>Tasks</span>
        </li>
        <li onClick={() => onChangePage("employee")}>
          <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
          <span>Employee</span>
        </li>
        <li onClick={onToggleSidebar} className="parent-dropdown">
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
        <li onClick={onToggleSidebar} className="parent-dropdown">
          <FontAwesomeIcon icon={faUserCog}></FontAwesomeIcon>
          <span>Admin</span>
          <span className="arrow-dropdown">
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </span>
          <ul className="dropdowns">
            <li>SuperUser List</li>
            <li onClick={() => onChangePage("company-list")}>Company List</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
