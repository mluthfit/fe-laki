import React from "react";
import Profile from "./Profile";
import "./css/employee.css";

class Employee extends React.Component {
  employeeList = [
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
  ];

  render() {
    return (
      <div className="employee">
        {this.employeeList.map((employee, index) => {
          return (
            <div key={index} className="employee-item">
              <Profile
                data={{ name: employee.name, title: employee.title }}
                isStatus={employee.status}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Employee;
