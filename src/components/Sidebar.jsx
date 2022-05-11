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
import style from "./css/sidebar.module.css";

const Sidebar = (props) => {
  const { onChangePage, isMenuOpen, userRole } = props;
  const onToggleSidebar = (event) => {
    event.stopPropagation();
    const child = event.target.querySelector(`.${style.child}`);
    const arrow = event.target.querySelector(`.${style.arrow}`);
    if (!child) return;

    child.classList.toggle(style.cOpen);
    arrow.classList.toggle(style.aOpen);
  };

  return (
    <div className={`${style.sidebar} ${isMenuOpen ? style.sOpen : ""}`}>
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
        {userRole !== 1 && (
          <li onClick={onToggleSidebar} className={style.parent}>
            <FontAwesomeIcon icon={faUserLock}></FontAwesomeIcon>
            <span>SuperUser</span>
            <span className={style.arrow}>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </span>
            <ul className={style.child}>
              <li onClick={() => onChangePage("employee-details")}>
                Employee Details
              </li>
              <li onClick={() => onChangePage("employee-accounts")}>
                Employee Accounts
              </li>
            </ul>
          </li>
        )}
        {userRole === 3 && (
          <li onClick={onToggleSidebar} className={style.parent}>
            <FontAwesomeIcon icon={faUserCog}></FontAwesomeIcon>
            <span>Admin</span>
            <span className={style.arrow}>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </span>
            <ul className={style.child}>
              <li onClick={() => onChangePage("super-user-list")}>
                SuperUser List
              </li>
              <li onClick={() => onChangePage("company-list")}>Company List</li>
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
