import axios from "axios";
import env from "../scripts/Environment";
import style from "./css/sidebar.module.css";
import React, { useState, useEffect } from "react";
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

const Sidebar = (props) => {
  const { onChangePage, isMenuOpen } = props;
  const [userRole, setUserRole] = useState(0);

  const checkParent = (parentClass, target) => {
    if (!target.classList.contains(parentClass)) {
      return checkParent(parentClass, target.parentElement);
    }

    return target;
  };

  const onToggleSidebar = (event) => {
    let target = checkParent(style.parent, event.target);
    const child = target.querySelector(`.${style.child}`);
    const arrow = target.querySelector(`.${style.arrow}`);
    if (!child) return;

    child.classList.toggle(style.cOpen);
    arrow.classList.toggle(style.aOpen);
  };

  useEffect(() => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const checkToken = async () => {
      try {
        const { data } = await axios.get(`${env.API_URL}/profiles`, options);

        setUserRole(data?.data?.user?.role);
      } catch (error) {
        console.log(error.response);
      }
    };

    checkToken();
  }, []);

  return (
    <div className={`${style.sidebar} ${isMenuOpen ? style.sOpen : ""}`}>
      <ul>
        {[1, 2].includes(userRole) && (
          <>
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
          </>
        )}

        {userRole === 2 && (
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
