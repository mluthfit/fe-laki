import React from "react";
import style from "./css/tasks.module.css";

const Tasks = () => {
  const onToggleFormEdit = (event) => {
    event.stopPropagation();
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

  const onHandleSubmit = (event) => {
    event.preventDefault();
  };

  const data = [
    {
      title: "Task 1",
      description: "<ul><li>Task 1</li><li>Task 2</li><li>Task 3</li></ul>",
      user_id: 1,
    },
    {
      title: "Task 2",
      description: "<ul><li>Task 1</li><li>Task 2</li><li>Task 3</li></ul>",
      user_id: 2,
    },
    {
      title: "Task 3",
      description: "<ul><li>Task 1</li><li>Task 2</li><li>Task 3</li></ul>",
      user_id: 3,
    },
  ];

  return (
    <div className={style.tasks}>
      {data.map((task, index) => {
        return (
          <div className={style.task} key={index}>
            <div className={style.title}>{task.title}</div>
            <div
              className={style.description}
              dangerouslySetInnerHTML={{
                __html: task.description,
              }}
            />
            {task.user_id === 1 && (
              <button className={style.edit} onClick={onToggleFormEdit}>
                Edit
              </button>
            )}
          </div>
        );
      })}
      <div className={style.background} onClick={onToggleFormEdit}></div>
      <div className={style.form}>
        <div className={style.header}>
          <span>Edit Task</span>
        </div>
        <div className={style.input}>
          <form onSubmit={onHandleSubmit}>
            <div className={style.title}>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" />
            </div>
            <div className={style.body}>
              <label htmlFor="body">Task</label>
              <textarea name="body" id="body" cols="30" rows="10"></textarea>
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
