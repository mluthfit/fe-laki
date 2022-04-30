import React from "react";
import { logo } from "../scripts/Image";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faPhoneAlt,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import style from "./css/footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <img src={logo} alt="LAKI's logo" />
      <div className={style.info}>
        <div>
          <h3>Menu</h3>
          <ul className={style.navbar}>
            <li>
              <span>
                <Link to="#home">&gt; Home</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="/login">&gt; Login</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="#about-us">&gt; About Us</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="#features">&gt; Features</Link>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <div>
            <div className={style.contact}>
              <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
              <span>www.laki.com</span>
            </div>
            <div className={style.contact}>
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              <span>@laki_id</span>
            </div>
            <div className={style.contact}>
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              <span>LAKI Official ID</span>
            </div>
            <div className={style.contact}>
              <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
              <span>+62 82387651234</span>
            </div>
          </div>
        </div>
        <div>
          <h3>Location</h3>
          <div className={style.location}>
            <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
            <span>Kuningan, Jakarta Selatan, 45510</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
