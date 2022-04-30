import React from "react";
import style from "./css/hours.module.css";

const WorkingHours = () => {
  return (
    <div className={style.container}>
      <div>
        <span className={style.title}>DATE</span>
        <div>
          <span className={style.date}>14</span>
          <span>March 2022</span>
        </div>
      </div>
      <div>
        <span className={style.title}>Clock In</span>
        <span className={style.time}>08:00</span>
      </div>
      <div className={style.date}>
        <span className={style.title}>Clock Out</span>
        <span className={style.time}>15:00</span>
      </div>
    </div>
  );
};

export default WorkingHours;
