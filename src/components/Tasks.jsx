import React from "react";
import "./css/tasks.css";

const Tasks = () => {
  const onToggleFormEdit = (event) => {
    event.stopPropagation();
    const tasks = document.querySelector(".tasks");
    if (!tasks) return;

    tasks.classList.toggle("open");
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
    <div className="tasks">
      {data.map((task, index) => {
        return (
          <div className="task" key={index}>
            <div className="task-title">{task.title}</div>
            <div
              className="task-description"
              dangerouslySetInnerHTML={{
                __html: task.description,
              }}
            />
            {task.user_id === 1 && (
              <button className="task-edit" onClick={onToggleFormEdit}>
                Edit
              </button>
            )}
          </div>
        );
      })}
      <div className="background-form-edit" onClick={onToggleFormEdit}></div>
      <div className="form-edit-container">
        <div className="header">
          <span>Edit Task</span>
        </div>
        <div className="input-container">
          <form onSubmit={onHandleSubmit}>
            <div className="title-box">
              <label htmlFor="title">Title</label>
              <input type="text" name="title-task" id="title" />
            </div>
            <div className="body-box">
              <label htmlFor="body">Task</label>
              <textarea
                name="body-task"
                id="body"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button type="submit" className="submit-task">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
