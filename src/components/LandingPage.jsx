import React from "react";
import Footer from "./Footer";
import jumbotron from "./images/jumbotron.png";
import laptop from "./images/laptop.png";
import pc from "./images/pc.png";
import camera from "./images/camera-features.png";
import analysis from "./images/analysis-features.png";
import activity from "./images/activity-features.png";
import "./css/landing-page.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div id="home" className="jumbotron">
        <img src={jumbotron} alt="LAKI's logo" />
        <h1>Monitoring and Managing Attendance Made Simple.</h1>
        <button className="join-us light-green">Join Us</button>
      </div>
      <div id="about-us" className="about-us">
        <div className="about-us-content">
          <img src={laptop} alt="laptop's icon" />
          <div className="about-us-info">
            <h1>
              Platform for{" "}
              <span className="light-green">online attendance</span> monitoring
              and management.
            </h1>
            <h1>Flexible.</h1>
            <h1>
              <span className="light-green">Simple.</span>
            </h1>
            <h1>Scalable.</h1>
          </div>
        </div>
      </div>
      <div id="features" className="features">
        <img src={pc} alt="pc's icon" />
        <div className="features-info">
          <h1>Features</h1>
          <div className="features-detail">
            <img src={camera} alt="camera's icon" />
            <div className="info-detail">
              <h2>Camera Validation</h2>
              <span>Camera support to validate team's attendance.</span>
            </div>
          </div>
          <div className="features-detail">
            <img src={analysis} alt="analysis's icon" />
            <div className="info-detail">
              <h2>Analysis Reports</h2>
              <span>Easy attendance report generation for analysis.</span>
            </div>
          </div>
          <div className="features-detail">
            <img src={activity} alt="activity's icon" />
            <div className="info-detail">
              <h2>Activity Tracker</h2>
              <span>Track everything your employee is working on.</span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
