import env from "../scripts/Environment";
import style from "./css/show-presences.module.css";
import React from "react";
import { checkSameDay, convertMonthName } from "../scripts/Helpers";

const ShowPresences = (props) => {
  const { presences } = props;
  const filteredPresences = presences.filter(
    (presence) => presence.media_id != null
  );

  return (
    <div className={style.presences}>
      {filteredPresences.map((presences) => {
        const date = new Date(presences.created_at);
        let fullDate = "Today";

        if (!checkSameDay(date, new Date())) {
          fullDate = `${date.getDate()} ${convertMonthName(
            date.getMonth()
          )} ${date.getFullYear()}`;
        }

        return (
          <div className={style.presence}>
            <div className={style.date}>
              <span className={style.title}>Date</span>
              <span>{fullDate}</span>
            </div>
            <div className={style.image}>
              <img
                src={`${env.STORAGE_URL}/${presences?.media?.storage_path}`}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowPresences;
