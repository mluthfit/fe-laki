import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPhoneAlt,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="LAKI's logo" />
      <div className="footer-info">
        <div className="menu">
          <h3>Menu</h3>
          <ul className="menu-nav">
            <li>
              <span>
                <Link to="#home" className="forgot-text">
                  &gt; Home
                </Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="/login" className="forgot-text">
                  &gt; Login
                </Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="#about-us" className="forgot-text">
                  &gt; About Us
                </Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="#features" className="forgot-text">
                  &gt; Features
                </Link>
              </span>
            </li>
          </ul>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <div className="contact-us-info">
            <div className="contact-us-brand">
              <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
              <span>www.laki.com</span>
            </div>
            <div className="contact-us-brand">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              <span>@laki_id</span>
            </div>
            <div className="contact-us-brand">
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              <span>LAKI Official ID</span>
            </div>
            <div className="contact-us-brand">
              <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
              <span>+62 82387651234</span>
            </div>
          </div>
        </div>
        <div className="location">
          <h3>Location</h3>
          <div className="location-info">
            <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
            <span>Kuningan, Jakarta Selatan, 45510</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
