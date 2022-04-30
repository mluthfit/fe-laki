import React, { useState } from "react";
import WorkingHours from "./WorkingHours";
import Profile from "./Profile";
import style from "./css/home.module.css";

const Home = () => {
  const [subMenu, setSubMenu] = useState("Statistics");

  const onChangeSubMenu = (event) => {
    const menus = document.querySelectorAll(`.${style.title} > span`);
    menus.forEach((menu) => {
      menu.classList.remove(style.open);
    });

    event.target.className = style.open;
    setSubMenu(event.target.innerText);
  };

  const user = {
    email: "kendrick.susanto@example.com",
    name: "Kendrick Lamar Susanto",
    position: "Finance Manager",
    company: "Land Croc Inc.",
  };

  return (
    <div className={style.home}>
      <WorkingHours></WorkingHours>
      <div className={style.bottom}>
        <div className={style.profile}>
          <Profile data={user} />
        </div>
        <div className={style.menu}>
          <div className={style.title}>
            <span className={style.open} onClick={onChangeSubMenu}>
              Statistics
            </span>
            <span onClick={onChangeSubMenu}>Task</span>
          </div>
          <div className={style.contents}>{subMenu}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
