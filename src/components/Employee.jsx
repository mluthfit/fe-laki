import React from "react";
import Profile from "./Profile";
import style from "./css/employee.module.css";

const Employee = () => {
  const employees = [
    {
      name: "John Doe",
      position: "CEO",
      status: "Online",
    },
    {
      name: "Kendrick Lamar Susanto",
      position: "Finance Manager",
      status: "Online",
    },
    {
      name: "Johny Depp",
      position: "Manager",
      status: "Offline",
    },
    {
      name: "Johny Depp",
      position: "Manager",
      status: "Offline",
    },
    {
      name: "John Doe",
      position: "CEO",
      status: "Online",
    },
    {
      name: "Kendrick Lamar Susanto",
      position: "Finance Manager",
      status: "Online",
    },
    {
      name: "Johny Depp",
      position: "Manager",
      status: "Offline",
    },
    {
      name: "Johny Depp",
      position: "Manager",
      status: "Offline",
    },
  ];

  return (
    <div className={style.employee}>
      {employees.map((employee, index) => {
        return (
          <div key={index} className={style.profile}>
            <Profile
              data={{ name: employee.name, position: employee.position }}
              status={employee.status}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Employee;
