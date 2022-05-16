import style from "./css/self-tasks.module.css";
import React from "react";
import { checkSameDay, convertMonthName } from "../scripts/Helpers";

const SelfTasks = (props) => {
  const { tasks } = props;

  return (
    <div className={style.tasks}>
      {tasks.map((task) => {
        const date = new Date(task.created_at);
        let fullDate = "Today";

        if (!checkSameDay(date, new Date())) {
          fullDate = `${date.getDate()} ${convertMonthName(
            date.getMonth()
          )} ${date.getFullYear()}`;
        }

        return (
          <div className={style.task} key={task.id}>
            <div className={style.date}>
              <span className={style.title}>Date</span>
              <span>{fullDate}</span>
            </div>
            <div className={style.description}>
              <span className={style.title}>Description</span>
              <span className={style.value}>{task.body}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelfTasks;
