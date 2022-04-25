import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "./css/user-list.css";

const EmployeeDetails = () => {
    const [image, setImage] = useState("https://via.placeholder.com/151");
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
            <div className="company-profile">
                <div className="company-profile-big-group">
                    <img src={image} alt="Company's Logo" />
                    <div className="company-profile-group">
                        <h2>Company's Name</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Maecenas eget metus eget ante commodo accumsan sit amet ut metus. 
                            Proin ut suscipit quam. Praesent ut neque ac est egestas pretium 
                            eu non odio. Ut interdum condimentum nisl sodales interdum. Orci 
                            varius natoque penatibus et magnis dis parturient montes, nascetur 
                            ridiculus mus. Maecenas non pharetra nisi, sed condimentum turpis. 
                            Suspendisse imperdiet quis lectus vel aliquet. Proin ullamcorper augue 
                            eu dolor faucibus lobortis. Aliquam suscipit nisl purus. Nam sit amet 
                            auctor magna. Etiam non quam ex. Nulla et sem ornare, tempor justo in, 
                            laoreet erat. Ut interdum, lorem sed sodales suscipit, est turpis feugiat 
                            sem, quis ullamcorper lacus lacus mollis metus. Mauris cursus lectus
                            arcu, nec eleifend ex consequat nec.</p>
                        <div className="counter-group">
                            <table>
                                <tr>
                                    <td><div className="dot-total" /></td>
                                    <td><div className="counter-total">450</div></td>
                                    <td><div className="counter-total spacing">Employee</div></td>
                                    <td><div className="dot-online" /></td>
                                    <td><div className="counter-online">300</div></td>
                                    <td><div className="counter-online spacing">Online</div></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-table">
                <h2 className="title">Employee List</h2>
                <DataTable columns={columns} data={data} pagination />
            </div>
        </div>
    );
};

export default EmployeeDetails;