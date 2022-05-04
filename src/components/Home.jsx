import React, { useEffect, useState } from "react";
import WorkingHours from "./WorkingHours";
import Profile from "./Profile";
import style from "./css/home.module.css";
import axios from "axios";
import env from "../scripts/Environment";

const Home = () => {
  const [subMenu, setSubMenu] = useState("Statistics");
  const [user, setUser] = useState({});
  const [clock, setClock] = useState({});
  const [tasks, setTasks] = useState([]);

  const onChangeSubMenu = (event) => {
    const menus = document.querySelectorAll(`.${style.title} > span`);
    menus.forEach((menu) => {
      menu.classList.remove(style.open);
    });

    event.target.className = style.open;
    setSubMenu(event.target.innerText);
  };

  const userd = {
    email: "kendrick.susanto@example.com",
    name: "Kendrick Lamar Susanto",
    position: "Finance Manager",
    company: "Land Croc Inc.",
  };

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const { data: dataUser } = axios.get(
          `${env.API_URL}/dashboard/user`,
          env.OPTIONS_AXIOS
        );

        const { data: dataClock } = axios.get(
          `${env.API_URL}/dashboard/clock-today`,
          env.OPTIONS_AXIOS
        );

        setUser({
          // email: dataUser?.email,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <div className={style.home}>
      <WorkingHours></WorkingHours>
      <div className={style.bottom}>
        <div className={style.profile}>
          <Profile data={userd} />
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
