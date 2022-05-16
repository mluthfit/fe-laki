import axios from "axios";
import env from "../scripts/Environment";
import style from "./css/superuser.module.css";
import DataTable from "react-data-table-component";
import React, { useEffect, useState } from "react";

const SuperUserList = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState(1);
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [companyList, setCompanyList] = useState([]);
  const [superUser, setSuperUser] = useState([]);
  const [formSuccess, setFormSuccess] = useState("");
  const [nameError, setNameError] = useState([]);
  const [emailError, setEmailError] = useState([]);
  const [companyError, setCompanyError] = useState([]);
  const [positionError, setPositionError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);
  const [confirmPassError, setConfirmPassError] = useState([]);
  const [alertDelete, setAlertDelete] = useState({});

  const onChangeValue = (row = null) => {
    setName(row?.name ?? "");
    setEmail(row?.email ?? "");
    setPosition(row?.title ?? "");
    setPassword(row?.password ?? "");
    setConfirmPass(row?.password ?? "");
  };

  const onResetError = () => {
    setNameError([]);
    setEmailError([]);
    setCompanyError([]);
    setPositionError([]);
    setPasswordError([]);
    setConfirmPassError([]);
  };

  const onDeleteSuperUser = async (userId, callbackFetch = undefined) => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { data } = await axios.delete(
        `${env.API_URL}/admin/superusers/${userId}`,
        options
      );

      setAlertDelete(data);
    } catch (error) {
      const { data } = error.response;
      setAlertDelete(data);
    }

    if (callbackFetch) {
      callbackFetch();
    }
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    onResetError();
    onSaveSuperUser(fetchSuperUser);
  };

  const onSaveSuperUser = async (fetchSuperUser = undefined) => {
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
        company_id: parseInt(company),
        role: 2,
      };

      const { data } = await axios.post(
        `${env.API_URL}/admin/superusers`,
        body,
        options
      );

      setFormSuccess(data?.messages);
      onChangeValue();

      if (fetchSuperUser) fetchSuperUser();
    } catch (error) {
      const { data } = error.response;
      if (data.validations) {
        setNameError(data.validations?.name ?? []);
        setEmailError(data.validations?.email ?? []);
        setPositionError(data.validations?.position ?? []);
        setCompanyError(data.validations?.company ?? []);
        setPasswordError(data.validations?.password ?? []);
        setConfirmPassError(data.validations?.confirm_password ?? []);
      }
    }
  };

  const fetchSuperUser = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { data } = await axios.get(
        `${env.API_URL}/admin/superusers`,
        options
      );

      const mappingData = data?.data.map((item) => {
        return {
          id: item.id,
          name: item.profile?.name,
          email: item.email,
          position: item.profile?.position,
          company: item.profile?.company?.name,
        };
      });

      setSuperUser(mappingData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCompanyList = async () => {
      const options = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      try {
        const { data } = await axios.get(
          `${env.API_URL}/admin/list-company`,
          options
        );

        setCompanyList(data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCompanyList();
    fetchSuperUser();
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
      name: "Company",
      selector: (row) => row.company ?? "-",
      sortable: true,
      grow: 2,
    },
    {
      name: "Delete",
      cell: (row) => (
        <span
          className={style.delete}
          onClick={(e) => {
            e.stopPropagation();
            onDeleteSuperUser(row.id, fetchSuperUser);
          }}
        >
          Delete
        </span>
      ),
      grow: 1,
    },
  ];

  return (
    <div className={style.superusers}>
      <div className={style.form}>
        {formSuccess && (
          <div className={style.success}>
            <span>{formSuccess}</span>
          </div>
        )}
        <h2>Form SuperUser</h2>
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
              <label htmlFor="company">Company</label>
              <select
                id="company"
                className={style.input}
                placeholder="Insert SuperUser Company Here..."
                onChange={(event) => setCompany(event.target.value)}
              >
                {companyList.map((company) => (
                  <option value={company.id} key={company.id}>
                    {company.name}
                  </option>
                ))}
              </select>
              {companyError.length > 0 && (
                <div className={style.error}>
                  {companyError.map((error, index) => (
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
                placeholder="Insert SuperUser Password Here..."
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
                id="confirm-password"
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
        <h2 className={style.title}>SuperUser List</h2>
        {Object.keys(alertDelete).length > 0 && (
          <div className={alertDelete.success ? style.success : style.error}>
            <span>{alertDelete.messages}</span>
          </div>
        )}
        <DataTable columns={columns} data={superUser} pagination />
      </div>
    </div>
  );
};

export default SuperUserList;
