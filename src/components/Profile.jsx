import React from "react";
import { capitalize } from "../scripts/Helpers";
import style from "./css/profiles.module.css";
import env from "../scripts/Environment";

const Profile = (props) => {
  const { data, status, image } = props;

  return (
    <div className={style.profiles}>
      <span className={style.title}>Employee Profile</span>
      <div className={style.content}>
        <div className={style.logo}>
          <img src={`${env.STORAGE_URL}/${image}`} alt="logo" />
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
