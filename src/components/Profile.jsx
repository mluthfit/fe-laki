import React from "react";
import { capitalize } from "../scripts/Helpers";
import style from "./css/profiles.module.css";

const Profile = (props) => {
  const { data, status } = props;

  return (
    <div className={style.profiles}>
      <span className={style.title}>Employee Profile</span>
      <div className={style.content}>
        <div className={style.logo}>
          <img src="https://via.placeholder.com/150" alt="logo" />
        </div>
        <div className={style.info}>
          {Object.keys(data).map((key, index) => {
            return (
              <div key={index} className={style.item}>
                <span className={style.key}>{capitalize(key)}</span>
                <span className={style.value}>{data[key]}</span>
              </div>
            );
          })}
          {status && (
            <div className={style.status}>
              <span
                className={status === "Online" ? style.online : style.offline}
              >
                {status}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
