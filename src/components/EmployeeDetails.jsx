import axios from "axios";
import env from "../scripts/Environment";
import style from "./css/employee-detail.module.css";
import DataTable from "react-data-table-component";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import SelfTasks from "./SelfTasks";
import ShowPresences from "./ShowPresences";

const EmployeeDetails = () => {
  const [company, setCompany] = useState({});
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [presences, setPresences] = useState([]);
  const [popUp, setPopUp] = useState("Tasks");

  const onPopupTasks = (event) => {
    event.stopPropagation();
    const popUp = document.querySelector(`.${style.popup}`);
    if (!popUp) return;

    popUp.classList.toggle(style.pOpen);
  };

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
      name: "Task",
      cell: (row) =>
        row.tasks.length > 0 && (
          <span
            className={style.view}
            onClick={(e) => {
              onPopupTasks(e);
              setTasks(row.tasks);
              setPopUp("Tasks");
            }}
          >
            View
          </span>
        ),
      grow: 0,
    },
    {
      name: "Presence",
      cell: (row) =>
        row.presences?.length > 0 && (
          <span
            className={style.view}
            onClick={(e) => {
              onPopupTasks(e);
              setPresences(row.presences);
              console.log(row.presences);
              setPopUp("Presences");
            }}
          >
            View
          </span>
        ),
      grow: 0,
    },
  ];

  const fetchCompany = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { data } = await axios.get(
        `${env.API_URL}/superuser/info-company`,
        options
      );
      setCompany(data?.data ?? {});
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEmployee = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { data } = await axios.get(
        `${env.API_URL}/superuser/user-profiles`,
        options
      );

      const mappingData = data?.data?.map((item) => {
        return {
          id: item?.user?.id,
          name: item?.name,
          email: item?.user?.email,
          position: item?.position,
          status: item?.user?.status ? "Online" : "Offline",
          tasks: item?.user?.tasks,
          presences: item?.user?.presences,
        };
      });

      setEmployees(mappingData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCompany();
    fetchEmployee();
  }, []);

  return (
    <div className={style.users}>
      <div className={style.container}>
        <div className={style.logo}>
          {company?.media && (
            <img
              src={`${env.STORAGE_URL}/${company?.media?.storage_path}`}
              alt="logo"
            />
          )}
        </div>
        <div className={style.info}>
          <h2 className={style.title}>{company?.name ?? "-"}</h2>
          <div className={style.description}>
            <div className={style.group}>
              <FontAwesomeIcon icon={faLocationArrow} />
              <span>{company?.address ?? "-"}</span>
            </div>
            <div className={style.group}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>{company?.email ?? "-"}</span>
            </div>
            <div className={style.group}>
              <FontAwesomeIcon icon={faPhone} />
              <span>{company?.phone ?? "-"}</span>
            </div>
            <div className={style.group}>
              <FontAwesomeIcon icon={faGlobe} />
              <span>{company?.website ?? "-"}</span>
            </div>
          </div>
          <div className={style.data}>
            <div className={style.employee}>
              <div></div>
              <span>{company?.total_employee ?? "0"} Employees</span>
            </div>
            <div className={style.online}>
              <div></div>
              <span>{company?.total_online ?? "0"} Online</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.table}>
        <h2 className={style.title}>Employee List</h2>
        <DataTable columns={columns} data={employees} pagination />
      </div>
      <div className={style.popup}>
        <div className={style.background} onClick={onPopupTasks}>
          <div className={style.box}>
            {popUp === "Tasks" && <SelfTasks tasks={tasks}></SelfTasks>}
            {popUp === "Presences" && (
              <ShowPresences presences={presences}></ShowPresences>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
