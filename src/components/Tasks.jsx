import React from "react";
import "./css/tasks.css";

const Tasks = () => {
  const onToggleFormEdit = (event) => {
    event.stopPropagation();
    const tasks = document.querySelector(".tasks");
    if (!tasks) return;

    tasks.classList.toggle("open");
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
      <div className="backgroundFormEdit" onClick={onToggleFormEdit}></div>
      <div className="formEditContainer">
        <div className="header">
          <span>Edit Task</span>
        </div>
        <div className="inputContainer">
          <div className="titleBox">
            <label htmlFor="title">Title</label>
            <input type="text" name="title-input" id="title" />
          </div>
          <div className="bodyBox">
            <label htmlFor="body">Task</label>
            <textarea
              name="body-input"
              id="body"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="submit-task">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
