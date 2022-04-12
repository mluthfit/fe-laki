import React from "react";
import "./css/tasks.css";

class Tasks extends React.Component {
  data = [
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

  toggleFormEdit = (e) => {
    e.stopPropagation();
    const tasks = document.querySelector(".tasks");
    if (!tasks) return;

    tasks.classList.toggle("open");
  };

  render() {
    return (
      <div className="tasks">
        {this.data.map((task, index) => {
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
                <button className="task-edit" onClick={this.toggleFormEdit}>
                  Edit
                </button>
              )}
            </div>
          );
        })}
        <div className="backgroundFormEdit" onClick={this.toggleFormEdit}></div>
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
  }
}

export default Tasks;
