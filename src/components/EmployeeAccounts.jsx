import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "./css/user-list.css";

const EmployeeAccounts = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmPass] = useState("");

    const onEditFormSuperList = (row) => {
        setName(row.name ?? "");
        setEmail(row.email ?? "");
        setTitle(row.title ?? "");
        setStatus(row.status ?? "");
        setPassword(row.password ?? "");
    };

    const onClearFormInput = () => {
        setName("");
        setEmail("");
        setTitle("");
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
            name: "Title",
            selector: (row) => row.title ?? "-",
            sortable: true,
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
                    className="delete-button"
                    onClick={() => {
                        console.log(row);
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
            title: "IT Manager",
            status: "Online",
        },
        {
            id: 2,
            name: "Jane Doe Setiawati",
            email: "jane.dodoe@gmail.com",
            title: "Data Scientist",
            status: "Online",
        },
        {
            id: 3,
            name: "Lewis Hamdullah",
            email: "lewis.h@email.com",
            title: "Cyber Security Analyst",
            status: "Online",
        },
        {
            id: 4,
            name: "Mikael Jardon",
            email: "jumpman23@gmail.com",
            title: "Quality Assurance",
            status: "Online",
        },
        {
            id: 5,
            name: "Kendrick Lamar Susanto",
            email: "kendricklamarsus@gmail.com",
            title: "Finance Manager",
            status: "Online",
        },
        {
            id: 6,
            name: "Jonathan Cena",
            email: "johncena@gmail.com",
            title: "Marketing Manager",
            status: "Offline",
        },
    ];

    return (
        <div className="user-list">
            <div className="insert-user">
                <h2>Form Employee</h2>
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
                            <label htmlFor="company">Title</label>
                            <input
                                className="input-general"
                                type={"text"}
                                name={"title"}
                                id={"title"}
                                value={title}
                                placeholder={"Insert SuperUser Title Here..."}
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
                                placeholder={"Insert SuperUser Job Title Here..."}
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
            <div className="user-table">
                <h2 className="title">Employee List</h2>
                <DataTable columns={columns} data={data} pagination />
            </div>
        </div>
    );
};

export default EmployeeAccounts;