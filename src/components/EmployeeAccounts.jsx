import axios from "axios";
import env from "../scripts/Environment";
import style from "./css/users.module.css";
import DataTable from "react-data-table-component";
import React, { useEffect, useState } from "react";

const EmployeeAccounts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  const [alertDelete, setAlertDelete] = useState({});
  const [formSuccess, setFormSuccess] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [positionError, setPositionError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");

  const onClearValue = (justPassword = false) => {
    if (!justPassword) {
      setName("");
      setEmail("");
      setPosition("");
    }

    setPassword("");
    setConfirmPass("");
  };

  const onResetError = () => {
    setNameError([]);
    setEmailError([]);
    setPositionError([]);
    setPasswordError([]);
    setConfirmPassError([]);
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    onResetError();
    setAlertDelete("");

    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const body = {
        name,
        email,
        position,
        password,
        confirm_password: confirmPass,
      };

      const { data } = await axios.post(
        `${env.API_URL}/superuser/users`,
        body,
        options
      );

      fetchEmployeeAccounts();
      setFormSuccess(data?.message ?? "");
      onClearValue();
    } catch (error) {
      const { data } = error.response;

      if (data.validations) {
        setNameError(data?.validations?.name ?? "");
        setEmailError(data?.validations?.email ?? "");
        setPositionError(data?.validations?.position ?? "");
        setPasswordError(data?.validations?.password ?? "");
        setConfirmPassError(data?.validations?.confirm_password ?? "");
      }

      onClearValue(true);
    }
  };

  const fetchEmployeeAccounts = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { data } = await axios.get(
        `${env.API_URL}/superuser/users/`,
        options
      );

      const mappingData = data?.data?.map((item) => ({
        id: item.id,
        name: item.profile.name,
        email: item.email,
        position: item.profile.position,
        status: item.profile.status ? "Online" : "Offline",
      }));

      setEmployeeList(mappingData);
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteUser = async (userId, fetchEmployeeAccounts = undefined) => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { data } = await axios.delete(
        `${env.API_URL}/superuser/users/${userId}`,
        options
      );

      setAlertDelete(data);
    } catch (error) {
      const { data } = error.response;
      setAlertDelete(data);
    }

    if (fetchEmployeeAccounts) fetchEmployeeAccounts();
  };

  useEffect(() => {
    fetchEmployeeAccounts();
  }, []);

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
      grow: 2,
    },
    {
      name: "Email",
      selector: (row) => row.email ?? "-",
      sortable: true,
      grow: 2,
    },
    {
      name: "Position",
      selector: (row) => row.position ?? "-",
      sortable: true,
      grow: 2,
    },
    {
      name: "Status",
      selector: (row) => row.status ?? "-",
      sortable: true,
    },
    {
      name: "Delete",
      cell: (row) => (
        <span
          className={style.delete}
          onClick={() => onDeleteUser(row.id, fetchEmployeeAccounts)}
        >
          Delete
        </span>
      ),
      grow: 1,
    },
  ];

  return (
    <div className={style.users}>
      <div className={style.form}>
        {formSuccess && (
          <div className={style.success}>
            <span>{formSuccess}</span>
          </div>
        )}
        <h2>Form Employee</h2>
        <form
          method="post"
          encType="multipart/form-data"
          onSubmit={onHandleSubmit}
        >
          <div className={style.big}>
            <div className={style.group}>
              <label htmlFor="name">Name</label>
              <input
                className={style.input}
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Insert SuperUser Name Here..."
              />
              {nameError.length > 0 && (
                <div className={style.error}>
                  {nameError.map((error, index) => (
                    <span key={index}>{error}</span>
                  ))}
                </div>
              )}
            </div>
            <div className={style.group}>
              <label htmlFor="email">Email</label>
              <input
                className={style.input}
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Insert SuperUser Email Here..."
              />
              {emailError.length > 0 && (
                <div className={style.error}>
                  {emailError.map((error, index) => (
                    <span key={index}>{error}</span>
                  ))}
                </div>
              )}
            </div>
            <div className={style.group}>
              <label htmlFor="company">Position</label>
              <input
                className={style.input}
                type="text"
                id="position"
                value={position}
                onChange={(event) => setPosition(event.target.value)}
                placeholder="Insert SuperUser Position Here..."
              />
              {positionError.length > 0 && (
                <div className={style.error}>
                  {positionError.map((error, index) => (
                    <span key={index}>{error}</span>
                  ))}
                </div>
              )}
            </div>
            <div className={style.group}>
              <label htmlFor="title">Password</label>
              <input
                className={style.input}
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Insert SuperUser Job Title Here..."
              />
              {passwordError.length > 0 && (
                <div className={style.error}>
                  {passwordError.map((error, index) => (
                    <span key={index}>{error}</span>
                  ))}
                </div>
              )}
            </div>
            <div className={style.group}>
              <label htmlFor="company">Confirm Password</label>
              <input
                className={style.input}
                type="password"
                id="confirm_password"
                value={confirmPass}
                onChange={(event) => setConfirmPass(event.target.value)}
                placeholder="Confirm SuperUser Password Here..."
              />
              {confirmPassError.length > 0 && (
                <div className={style.error}>
                  {confirmPassError.map((error, index) => (
                    <span key={index}>{error}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button className={style.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className={style.table}>
        <h2 className={style.title}>Employee List</h2>
        {Object.keys(alertDelete).length > 0 && (
          <div className={alertDelete.success ? style.success : style.error}>
            <span>{alertDelete.messages}</span>
          </div>
        )}
        <DataTable columns={columns} data={employeeList} pagination />
      </div>
    </div>
  );
};

export default EmployeeAccounts;
