import axios from "axios";
import env from "../scripts/Environment";
import style from "./css/topbar.module.css";
import React, { useState, useEffect } from "react";
import { logo } from "../scripts/Image";
import { useNavigate } from "react-router-dom";
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

const Topbar = (props) => {
  const { onToggleMenu, onChangePage, isLoggedIn, setLogged } = props;
  const [companyName, setCompanyName] = useState("");

  const navigate = useNavigate();

  const onLogout = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { data } = await axios.post(
        `${env.API_URL}/auth/logout`,
        {},
        options
      );

      console.log(data.messages);
    } catch (error) {
      console.log(error.response);
    }
  };

  const onToggleUser = (event) => {
    event.stopPropagation();
    const menuAccount = document.querySelector(`.${style.bars}`);
    if (!menuAccount) return;

    menuAccount.classList.toggle(style.open);
  };

  const checkOutside = (event) => {
    event.stopPropagation();

    const menuAccount = document.querySelector(`.${style.bars}`);
    if (!menuAccount) return;

    menuAccount.classList.remove(style.open);
  };

  useEffect(() => {
    document.addEventListener("click", checkOutside);

    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    if (isLoggedIn) {
      const fetchCompanyName = async () => {
        try {
          const { data } = await axios.get(`${env.API_URL}/profiles`, options);
          setCompanyName(data?.data?.company?.name);
        } catch (error) {
          console.log(error.response);
        }
      };

      fetchCompanyName();
    }
  }, [isLoggedIn]);

  return (
    <div className={style.topbar}>
      <FontAwesomeIcon
        icon={faBars}
        size="xl"
        className={style.menu}
        onClick={onToggleMenu}
      ></FontAwesomeIcon>
      <img
        src={logo}
        alt="LAKI's logo"
        className={style.logo}
        onClick={() => navigate("/")}
      />
      {isLoggedIn ? (
        <div className={style.right}>
          <div className={style.company}>
            <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
            <span>{companyName}</span>
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
                        onLogout();
                        setLogged(false);
                        localStorage.removeItem("token");
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
            <a href="/#home" className={style.pages}>
              Home
            </a>
          </span>
          <span>
            <a href="/#about-us" className={style.pages}>
              About Us
            </a>
          </span>
          <span>
            <a href="/#features" className={style.pages}>
              Features
            </a>
          </span>
          <div className={style.login} onClick={() => navigate("/login")}>
            <span>Login</span>
            <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
