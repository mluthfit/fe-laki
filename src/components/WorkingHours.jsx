import React from "react";
import { convertMonthName } from "../scripts/Helpers";
import style from "./css/hours.module.css";

const WorkingHours = (props) => {
  const { clock } = props;
  const time = new Date();

  const formatTime = (timestamp) => {
    if (!timestamp) return null;

    const date = new Date(timestamp);
    return `${date.getHours()}:${
      date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
    }`;
  };

  return (
    <div className={style.container}>
      <div>
        <span className={style.title}>DATE</span>
        <div>
          <span className={style.date}>{time.getDate()}</span>
          <span>{`${convertMonthName(
            time.getMonth()
          )} ${time.getFullYear()}`}</span>
        </div>
      </div>
      <div>
        <span className={style.title}>Clock In</span>
        <span className={style.time}>{formatTime(clock?.clock_in) ?? "-"}</span>
      </div>
      <div className={style.date}>
        <span className={style.title}>Clock Out</span>
        <span className={style.time}>
          {formatTime(clock?.clock_out) ?? "-"}
        </span>
      </div>
    </div>
  );
};

export default WorkingHours;
