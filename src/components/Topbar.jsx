import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faUser,
  faBell,
  faBuilding,
  faCog,
  faSignOut,
  faBars,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import "./css/topbar.css";

const Topbar = (props) => {
  const { onToggleMenu, onChangePage, isLoggedIn, setLogged } = props;
  const navigate = useNavigate();

  const onToggleUser = (event) => {
    event.stopPropagation();
    const menuAccount = document.querySelector(".menu-account");
    if (!menuAccount) return;

    menuAccount.classList.toggle("open");
  };

  return (
    <div className="topbar">
      <FontAwesomeIcon
        icon={faBars}
        size="xl"
        className="menu-bars"
        onClick={onToggleMenu}
      ></FontAwesomeIcon>
      <img src={logo} alt="LAKI's logo" className="logo" />
      {isLoggedIn ? (
        <div className="topbar-right">
          <div className="company">
            <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
            <span>Creative Consultant Inc.</span>
          </div>
          <div className="users">
            <div className="notification">
              <span>
                <FontAwesomeIcon icon={faBell} size="lg"></FontAwesomeIcon>
              </span>
            </div>
            <div className="accounts">
              <span className="action-account" onClick={onToggleUser}>
                <FontAwesomeIcon icon={faUser} size="lg"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faAngleDown} size="xs"></FontAwesomeIcon>
              </span>
              <div className="menu-account">
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
        <div className="topbar-right">
          <span>
            <Link to="/#home" className="link-pages">
              Home
            </Link>
          </span>
          <span>
            <Link to="/#about-us" className="link-pages">
              About Us
            </Link>
          </span>
          <span>
            <Link to="/#features" className="link-pages">
              Features
            </Link>
          </span>
          <div className="login-button">
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
