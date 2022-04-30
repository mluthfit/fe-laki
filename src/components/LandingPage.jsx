import React from "react";
import Footer from "./Footer";
import style from "./css/landing.module.css";
import {
  activity,
  analysis,
  camera,
  jumbotron,
  laptop,
  pc,
} from "../scripts/Image";

const LandingPage = () => {
  return (
    <div>
      <div id="home" className={style.jumbotron}>
        <img src={jumbotron} alt="LAKI's logo" />
        <h1>Monitoring and Managing Attendance Made Simple.</h1>
        <button>Join Us</button>
      </div>
      <div id="about-us">
        <div className={style.about}>
          <img src={laptop} alt="laptop's icon" />
          <div className={style.info}>
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
      <div id="features" className={style.features}>
        <img src={pc} alt="pc's icon" />
        <div className={style.info}>
          <h1>Features</h1>
          <div className={style.details}>
            <img src={camera} alt="camera's icon" />
            <div>
              <h2>Camera Validation</h2>
              <span>Camera support to validate team's attendance.</span>
            </div>
          </div>
          <div className={style.details}>
            <img src={analysis} alt="analysis's icon" />
            <div>
              <h2>Analysis Reports</h2>
              <span>Easy attendance report generation for analysis.</span>
            </div>
          </div>
          <div className={style.details}>
            <img src={activity} alt="activity's icon" />
            <div>
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
