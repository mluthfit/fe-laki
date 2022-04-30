import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "./css/superuser-list.css";

const SuperUserList = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");

  const onEditFormSuperList = (row) => {
    setName(row.name ?? "");
    setEmail(row.email ?? "");
    setPosition(row.title ?? "");
    setCompany(row.company ?? "");
    setPassword(row.password ?? "");
  };

  const onClearFormInput = () => {
    setName("");
    setEmail("");
    setPosition("");
    setCompany("");
    setPassword("");
    setConfirmPass("");
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    onClearFormInput();
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
      name: "Company",
      selector: (row) => row.company ?? "-",
      sortable: true,
    },
    {
      name: "Delete",
      cell: (row) => (
        <span
          className="delete-button"
          onClick={() => {
            onEditFormSuperList(row);
          }}
        >
          Delete
        </span>
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

  return (
    <div className="super-user-list">
      <div className="insert-super-user">
        <h2>Form SuperUser</h2>
        <form
          method="post"
          encType="multipart/form-data"
          onSubmit={onHandleSubmit}
        >
          <div className="form-big-group">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="input-general"
                type={"text"}
                name={"name"}
                id={"name"}
                value={name}
                placeholder={"Insert SuperUser Name Here..."}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="input-general"
                type={"email"}
                name={"email"}
                id={"email"}
                value={email}
                placeholder={"Insert SuperUser Email Here..."}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Password</label>
              <input
                className="input-general"
                type={"password"}
                name={"password"}
                id={"password"}
                value={password}
                placeholder={"Insert SuperUser Password Here..."}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Position</label>
              <input
                className="input-general"
                type={"text"}
                name={"position"}
                id={"position"}
                value={position}
                placeholder={"Insert SuperUser Position Here..."}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                className="input-general"
                type={"text"}
                name={"company"}
                id={"company"}
                value={company}
                placeholder={"Insert SuperUser Company Here..."}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Confirm Password</label>
              <input
                className="input-general"
                type={"password"}
                name={"confirmpass"}
                id={"confirmpass"}
                value={confirmpass}
                placeholder={"Confirm SuperUser Password Here..."}
              />
            </div>
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="super-user-table">
        <h2 className="title">SuperUser List</h2>
        <DataTable columns={columns} data={data} pagination />
      </div>
    </div>
  );
};

export default SuperUserList;
