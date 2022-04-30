import DataTable from "react-data-table-component";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import style from "./css/employee-detail.module.css";

const EmployeeDetails = () => {
  const [image, setImage] = useState("https://via.placeholder.com/151");
  const columns = [
    {
      name: "#",
      cell: (_, index) => index + 1,
      grow: 0,
    },
    {
      name: "Name",
      selector: (row) => row.name ?? "-",
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email ?? "-",
      sortable: true,
    },
    {
      name: "Position",
      selector: (row) => row.position ?? "-",
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status ?? "-",
      sortable: true,
    },
    {
      name: "Details",
      cell: (row) => (
        <a
          href={row.details}
          target="_blank"
          rel="noopener noreferrer"
          className="details-button"
        >
          Details
        </a>
      ),
      grow: 0,
    },
    {
      name: "View Task",
      cell: (row) => (
        <a
          href={row.viewtask}
          target="_blank"
          rel="noopener noreferrer"
          className="view-task-button"
        >
          Task
        </a>
      ),
      grow: 0,
    },
  ];

  const data = [
    {
      id: 1,
      name: "John Doe Kurniadi",
      email: "johndoe@email.com",
      position: "IT Manager",
      status: "Online",
    },
    {
      id: 2,
      name: "Jane Doe Setiawati",
      email: "jane.dodoe@gmail.com",
      position: "Data Scientist",
      status: "Online",
    },
    {
      id: 3,
      name: "Lewis Hamdullah",
      email: "lewis.h@email.com",
      position: "Cyber Security Analyst",
      status: "Online",
    },
    {
      id: 4,
      name: "Mikael Jardon",
      email: "jumpman23@gmail.com",
      position: "Quality Assurance",
      status: "Online",
    },
    {
      id: 5,
      name: "Kendrick Lamar Susanto",
      email: "kendricklamarsus@gmail.com",
      position: "Finance Manager",
      status: "Online",
    },
    {
      id: 6,
      name: "Jonathan Cena",
      email: "johncena@gmail.com",
      position: "Marketing Manager",
      status: "Offline",
    },
  ];

  return (
    <div className={style.users}>
      <div className={style.container}>
        <div className={style.logo}>
          <img src={image} alt="logo" />
        </div>
        <div className={style.info}>
          <h2 className={style.title}>Land Croc Inc.</h2>
          <div className={style.description}>
            <div className={style.group}>
              <FontAwesomeIcon icon={faLocationArrow} />
              <span>
                Jl. Lorem Ipsum Dolor Sit Amet, No 15, Jakarta Timur, Indonesia
                13330
              </span>
            </div>
            <div className={style.group}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>support@lancroc.com</span>
            </div>
            <div className={style.group}>
              <FontAwesomeIcon icon={faPhone} />
              <span>+62 12345678</span>
            </div>
            <div className={style.group}>
              <FontAwesomeIcon icon={faGlobe} />
              <span>www.land-croc.org</span>
            </div>
          </div>
          <div className={style.data}>
            <div className={style.employee}>
              <div></div>
              <span>105000 Employee</span>
            </div>
            <div className={style.online}>
              <div></div>
              <span>95000 Online</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.table}>
        <h2 className={style.title}>Employee List</h2>
        <DataTable columns={columns} data={data} pagination />
      </div>
    </div>
  );
};

export default EmployeeDetails;
