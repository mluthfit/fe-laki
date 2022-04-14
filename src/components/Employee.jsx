import React from "react";
import Profile from "./Profile";
import "./css/employee.css";

const Employee = () => {
  const employees = [
    {
      name: "John Doe",
      title: "CEO",
      status: "Online",
    },
    {
      name: "Kendrick Lamar Susanto",
      title: "Finance Manager",
      status: "Online",
    },
    {
      name: "Johny Depp",
      title: "Manager",
      status: "Offline",
    },
    {
      name: "Johny Depp",
      title: "Manager",
      status: "Offline",
    },
    {
      name: "John Doe",
      title: "CEO",
      status: "Online",
    },
    {
      name: "Kendrick Lamar Susanto",
      title: "Finance Manager",
      status: "Online",
    },
    {
      name: "Johny Depp",
      title: "Manager",
      status: "Offline",
    },
    {
      name: "Johny Depp",
      title: "Manager",
      status: "Offline",
    },
  ];

  return (
    <div className="employee">
      {employees.map((employee, index) => {
        return (
          <div key={index}>
            <Profile
              data={{ name: employee.name, title: employee.title }}
              status={employee.status}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Employee;
