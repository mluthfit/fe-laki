import React from "react";
import WorkingHours from "./WorkingHours";
import Profile from "./Profile";
import "./css/home.css";

class Home extends React.Component {
  hoverTitle = (e) => {
    const title = document.querySelectorAll(".title span");
    title.forEach((item) => {
      item.classList.remove("open");
    });

    e.target.className = "open";
  };

  render() {
    return (
      <div className="home">
        <WorkingHours></WorkingHours>
        <div className="down">
          <Profile></Profile>
          <div className="menu-home">
            <div className="title">
              <span className="open" onClick={this.hoverTitle}>
                Statistics
              </span>
              <span onClick={this.hoverTitle}>Task</span>
            </div>
            <div className="content-menu">Test</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
