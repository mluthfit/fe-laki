import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { onToggleMenu, onChangePage, isLoggedIn } = props;
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
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="topbar-right">
          <span onClick={() => navigate("/")} className="link-pages">
            Home
          </span>
          <span onClick={() => navigate("/#about-us")} className="link-pages">
            About Us
          </span>
          <span onClick={() => navigate("/#features")} className="link-pages">
            Features
          </span>
          <div className="login-button">
            <span onClick={() => navigate("/login")}>Login</span>
            <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
