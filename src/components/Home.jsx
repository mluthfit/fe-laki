import React, { useEffect, useState } from "react";
import WorkingHours from "./WorkingHours";
import Profile from "./Profile";
import style from "./css/home.module.css";
import axios from "axios";
import env from "../scripts/Environment";
import SelfTasks from "./SelfTasks";

const Home = () => {
  const [subMenu, setSubMenu] = useState("Task");
  const [user, setUser] = useState({
    email: "",
    name: "",
    position: "",
    company: "",
  });

  const [clock, setClock] = useState({});
  const [tasks, setTasks] = useState([]);
  const [image, setImage] = useState("");

  const onChangeSubMenu = (event) => {
    const menus = document.querySelectorAll(`.${style.title} > span`);
    menus.forEach((menu) => {
      menu.classList.remove(style.open);
    });

    event.target.className = style.open;
    setSubMenu(event.target.innerText);
  };

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const { data: dataUser } = await axios.get(
          `${env.API_URL}/dashboard/user`,
          env.OPTIONS_AXIOS
        );

        const { data: dataClock } = await axios.get(
          `${env.API_URL}/dashboard/clock-today`,
          env.OPTIONS_AXIOS
        );

        setUser({
          email: dataUser?.data?.email,
          name: dataUser?.data?.name,
          position: dataUser?.data?.position,
          company: dataUser?.data?.company?.name,
        });

        setTasks(dataUser?.data?.tasks);
        setImage(dataUser?.data?.media?.storage_path);
        setClock(dataClock?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className={style.home}>
      <WorkingHours clock={clock}></WorkingHours>
      <div className={style.bottom}>
        <div className={style.profile}>
          <Profile data={user} image={image} />
        </div>
        <div className={style.menu}>
          <div className={style.title}>
            <span className={style.open} onClick={onChangeSubMenu}>
              Task
            </span>
            {/* <span onClick={onChangeSubMenu}>Statistic</span> */}
          </div>
          <div className={style.contents}>
            {subMenu === "Task" && <SelfTasks tasks={tasks} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
