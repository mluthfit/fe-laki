import React from "react";
import { logo } from "../scripts/Image";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faUser,
  // faBell,
  faBuilding,
  faCog,
  faSignOut,
  faBars,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import style from "./css/topbar.module.css";

const Topbar = (props) => {
  const { onToggleMenu, onChangePage, isLoggedIn, setLogged, company } = props;
  const navigate = useNavigate();

  const onToggleUser = (event) => {
    event.stopPropagation();
    const menuAccount = document.querySelector(`.${style.bars}`);
    if (!menuAccount) return;

    menuAccount.classList.toggle(style.open);
  };

  return (
    <div className={style.topbar}>
      <FontAwesomeIcon
        icon={faBars}
        size="xl"
        className={style.menu}
        onClick={onToggleMenu}
      ></FontAwesomeIcon>
      <img src={logo} alt="LAKI's logo" className={style.logo} />
      {isLoggedIn ? (
        <div className={style.right}>
          <div className={style.company}>
            <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
            <span>{company}</span>
          </div>
          <div className={style.users}>
            {/* <div className={style.notification}>
              <span>
                <FontAwesomeIcon icon={faBell} size="lg"></FontAwesomeIcon>
              </span>
            </div> */}
            <div className={style.accounts}>
              <span className={style.icon} onClick={onToggleUser}>
                <FontAwesomeIcon icon={faUser} size="lg"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faAngleDown} size="xs"></FontAwesomeIcon>
              </span>
              <div className={style.bars}>
                <ul>
                  <li onClick={() => onChangePage("show-profile")}>
                    <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
                    <span>Profile</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>
                    <span
                      onClick={() => {
                        localStorage.removeItem("token");
                        setLogged(false);
                        navigate("/login");
                      }}
                    >
                      Logout
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.right}>
          <span>
            <Link to="/#home" className={style.pages}>
              Home
            </Link>
          </span>
          <span>
            <Link to="/#about-us" className={style.pages}>
              About Us
            </Link>
          </span>
          <span>
            <Link to="/#features" className={style.pages}>
              Features
            </Link>
          </span>
          <div className={style.login}>
            <span>
              <Link to="/login">Login</Link>
            </span>
            <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
