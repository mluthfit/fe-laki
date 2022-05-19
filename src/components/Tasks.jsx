import axios from "axios";
import env from "../scripts/Environment";
import style from "./css/tasks.module.css";
import React, { useState, useEffect } from "react";

const Tasks = (props) => {
  const [userTasks, setUserTasks] = useState([]);
  const [bodyTask, setBodyTask] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");
  const [bodyError, setBodyError] = useState("");
  const [userId, setUserId] = useState(0);

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
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { data } = await axios.get(`${env.API_URL}/tasks`, options);

      setUserTasks(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserId = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { data } = await axios.get(`${env.API_URL}/profiles`, options);
      setUserId(data?.data?.id);
    } catch (error) {
      console.log(error.response);
    }
  };

  const editTask = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { data } = await axios.put(
        `${env.API_URL}/tasks`,
        {
          body: bodyTask,
        },
        options
      );

      fetchTasks();
      onToggleShowForm();

      if (data.messages) {
        setFormSuccess(data.messages);
      }
    } catch (error) {
      const { data } = error.response;
      if (data.message) {
        setFormError(data.message);
      }

      if (data.validations) {
        setBodyError(data.validations.body);
      }
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    editTask();
  };

  useEffect(() => {
    fetchTasks();
    fetchUserId();
  }, []);

  return (
    <div className={style.tasks}>
      {formSuccess && (
        <div className={style.success}>
          <span>{formSuccess}</span>
        </div>
      )}
      <div className={style.container}>
        {userTasks.map((user, index) => {
          return (
            <div className={style.task} key={index}>
              <div className={style.title}>{user.profile?.name}</div>
              <div className={style.description}>
                {user.tasks.length > 0 ? user.tasks[0].body : ""}
              </div>
              {user.id === userId && (
                <button
                  className={style.edit}
                  onClick={() => {
                    const description = document.querySelector(
                      `.${style.description}`
                    );

                    setBodyTask(description.innerHTML);
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
                {bodyError.length > 0 && (
                  <div className={style.error}>
                    {bodyError.map((error) => (
                      <span>{error}</span>
                    ))}
                  </div>
                )}
              </div>
              {formError && (
                <div className={style.error}>
                  <span>{formError}</span>
                </div>
              )}
              <button type="submit" className={style.submit}>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
