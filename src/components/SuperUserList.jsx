import React, { useState } from "react";
import DataTable from "react-data-table-component";
import style from "./css/superuser.module.css";

const SuperUserList = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const onChangeValue = (row = null) => {
    setName(row?.name ?? "");
    setEmail(row?.email ?? "");
    setPosition(row?.title ?? "");
    setCompany(row?.company ?? "");
    setPassword(row?.password ?? "");
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    onChangeValue();
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
      cell: (row) => <span className={style.delete}>Delete</span>,
      grow: 1,
    },
  ];

  const data = [
    {
      id: 1,
      name: "John Doe Kurniadi",
      email: "johndoe@email.com",
      position: "IT Manager",
      company: "Land Croc Inc.",
    },
    {
      id: 2,
      name: "Jane Doe Setiawati",
      email: "jane.dodoe@gmail.com",
      position: "Data Scientist",
      company: "Land Croc Inc.",
    },
    {
      id: 3,
      name: "Lewis Hamdullah",
      email: "lewis.h@email.com",
      position: "Cyber Security Analyst",
      company: "Super Inc.",
    },
    {
      id: 4,
      name: "Mikael Jardon",
      email: "jumpman23@gmail.com",
      position: "Quality Assurance",
      company: "Teslah Inc.",
    },
    {
      id: 5,
      name: "Kendrick Lamar Susanto",
      email: "kendricklamarsus@gmail.com",
      position: "Finance Manager",
      company: "Land Croc Inc.",
    },
    {
      id: 6,
      name: "Jonathan Cena",
      email: "johncena@gmail.com",
      position: "Marketing Manager",
      company: "Teslah Inc.",
    },
  ];

  const companyList = [
    {
      id: 1,
      name: "One Coporate Inc.",
    },
    {
      id: 2,
      name: "Two Coporate Inc.",
    },
    {
      id: 3,
      name: "Three Coporate Inc.",
    },
  ];

  return (
    <div className={style.superusers}>
      <div className={style.form}>
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
            </div>
            <div className={style.group}>
              <label htmlFor="company">Company</label>
              <select
                id="company"
                className={style.input}
                placeholder="Insert SuperUser Company Here..."
              >
                {companyList.map((company) => (
                  <option value={company.id}>{company.name}</option>
                ))}
              </select>
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
            </div>
          </div>
          <button className={style.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className={style.table}>
        <h2 className={style.title}>SuperUser List</h2>
        <DataTable columns={columns} data={data} pagination />
      </div>
    </div>
  );
};

export default SuperUserList;
