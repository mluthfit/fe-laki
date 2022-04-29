import React, { useState } from "react";
import WorkingHours from "./WorkingHours";
import Profile from "./Profile";
import "./css/home.css";

const Home = () => {
  const [subMenu, setSubMenu] = useState("Statistics");

  const onChangeSubMenu = (event) => {
    const menus = document.querySelectorAll(".title span");
    menus.forEach((menu) => {
      menu.classList.remove("open");
    });

    event.target.className = "open";
    setSubMenu(event.target.innerText);
  };

  const user = {
    email: "kendrick.susanto@example.com",
    name: "Kendrick Lamar Susanto",
    position: "Finance Manager",
    company: "Land Croc Inc.",
  };

  return (
    <div className="home">
      <WorkingHours></WorkingHours>
      <div className="down">
        <Profile data={user} />
        <div className="menu-home">
          <div className="title">
            <span className="open" onClick={onChangeSubMenu}>
              Statistics
            </span>
            <span onClick={onChangeSubMenu}>Task</span>
          </div>
          <div className="content-menu">{subMenu}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
