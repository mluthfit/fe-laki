import React, { useState, useEffect } from "react";
import Auth from "../scripts/Auth";
import axios from "axios";
import env from "../scripts/Environment";
import style from "./css/tasks.module.css";

const Tasks = () => {
  const [userTasks, setUserTasks] = useState([]);
  const [bodyTask, setBodyTask] = useState("");

  const onToggleShowForm = () => {
    const background = document.querySelector(`.${style.background}`);
    const form = document.querySelector(`.${style.form}`);
    if (!form) return;

    if (form.classList.contains(style.fOpen)) {
      form.classList.remove(style.fOpen);
      background.classList.remove(style.bOpen);
      return;
    }

    form.classList.add(style.fOpen);
    background.classList.add(style.bOpen);
  };

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(
        `${env.API_URL}/tasks`,
        env.OPTIONS_AXIOS
      );

      setUserTasks(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = async () => {
    try {
      const { data } = await axios.put(
        `${env.API_URL}/tasks`,
        {
          body: bodyTask,
        },
        env.OPTIONS_AXIOS
      );

      fetchTasks();
      onToggleShowForm();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (Auth.isTokenAvailable()) editTask();
  };

  useEffect(() => {
    if (Auth.isTokenAvailable()) fetchTasks();
  }, []);

  return (
    <div className={style.tasks}>
      {userTasks.map((user, index) => {
        return (
          <div className={style.task} key={index}>
            <div className={style.title}>{user.profile?.name}</div>
            <div className={style.description}>
              {user.tasks.length > 0 ? user.tasks[0].body : ""}
            </div>
            {user.id === 2 && (
              <button
                className={style.edit}
                onClick={() => {
                  const description = document.querySelector(
                    `.${style.description}`
                  );

                  setBodyTask(description.innerHTML ?? "aa");
                  onToggleShowForm();
                }}
              >
                Edit
              </button>
            )}
          </div>
        );
      })}
      <div
        className={style.background}
        onClick={() => onToggleShowForm()}
      ></div>
      <div className={style.form}>
        <div className={style.header}>
          <span>Edit Task</span>
        </div>
        <div className={style.input}>
          <form onSubmit={onSubmitForm}>
            <div className={style.body}>
              <label htmlFor="body">Body</label>
              <textarea
                onChange={(e) => setBodyTask(e.target.value)}
                id="body"
                cols="30"
                rows="10"
                value={bodyTask}
              ></textarea>
            </div>
            <button type="submit" className={style.submit}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
