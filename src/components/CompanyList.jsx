import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faEye } from "@fortawesome/free-solid-svg-icons";
import DataTable from "react-data-table-component";
import style from "./css/companies.module.css";

const CompanyList = () => {
  const [image, setImage] = useState("https://via.placeholder.com/151");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const onPopupImage = (event) => {
    event.stopPropagation();
    const popUp = document.querySelector(`.${style.popup}`);
    if (!popUp) return;

    popUp.classList.toggle(style.pOpen);
  };

  const onChangeValue = (row = null) => {
    setName(row?.name ?? "");
    setAddress(row?.address ?? "");
    setPhone(row?.phone ?? "");
    setEmail(row?.email ?? "");
    setWebsite(row?.website ?? "");
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
    },
    {
      name: "Address",
      selector: (row) => row.address ?? "-",
      sortable: true,
      grow: 2,
    },
    {
      name: "Phone",
      selector: (row) => row.phone ?? "-",
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email ?? "-",
      sortable: true,
    },
    {
      name: "Web",
      cell: (row) =>
        row.website && (
          <a
            href={row.website}
            target="_blank"
            rel="noopener noreferrer"
            className={style.web}
          >
            <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
          </a>
        ),
      grow: 0,
    },
    {
      name: "Logo",
      cell: (row) =>
        row.logo && (
          <span
            className={style.logo}
            onClick={(e) => {
              setImage(row.logo);
              onPopupImage(e);
            }}
          >
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
          </span>
        ),
      grow: 0,
    },
    {
      name: "Edit",
      cell: (row) => (
        <span
          className={style.edit}
          onClick={() => {
            onChangeValue(row);
          }}
        >
          Edit
        </span>
      ),
      grow: 0,
    },
  ];

  const data = [
    {
      id: 1,
      name: "Teslah Crop.",
      address: "JL. Lorem Ipsum",
      phone: "+62 82345679876",
      email: "noreply@teslah.com",
      website: null,
      logo: "https://via.placeholder.com/151",
    },
    {
      id: 2,
      name: "Super Inc.",
      address: "JL. Jend. Sudirman",
      phone: null,
      email: "admin@super.co.id",
      website: "https://www.facebook.com",
      logo: "https://via.placeholder.com/151",
    },
    {
      id: 3,
      name: "Teslah Crop.",
      address: "JL. Lorem Ipsum",
      phone: "+62 82345679876",
      email: "noreply@teslah.com",
      website: "https://www.google.com",
      logo: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Super Inc.",
      address: "JL. Jend. Sudirman",
      phone: "+62 82323487654",
      email: "admin@super.co.id",
      website: "https://www.facebook.com",
      logo: "https://via.placeholder.com/151",
    },
    {
      id: 5,
      name: "Teslah Crop.",
      address: "JL. Lorem Ipsum",
      phone: "+62 82345679876",
      email: "noreply@teslah.com",
      website: "https://www.google.com",
      logo: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className={style.companies}>
      <div className={style.form}>
        <h2>Form Company</h2>
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
                onChange={(e) => setName(e.target.value)}
                placeholder="Insert Company Name Here..."
              />
            </div>
            <div className={style.group}>
              <label htmlFor="address">Address</label>
              <input
                className={style.input}
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Insert Company Address Here..."
              />
            </div>
            <div className={style.group}>
              <label htmlFor="phone">Phone Number</label>
              <input
                className={style.input}
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Insert Phone Number Here..."
              />
            </div>
            <div className={style.group}>
              <label htmlFor="email">Email</label>
              <input
                className={style.input}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Insert Email Here..."
              />
            </div>
            <div className={style.group}>
              <label htmlFor="website">Website</label>
              <input
                className={style.input}
                type="text"
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Insert Website Link Here..."
              />
            </div>
            <div className={style.group}>
              <label htmlFor="logo">Logo</label>
              <div className={style.file}>
                <button className={style.button}>Insert Logo Here...</button>
                <input type="file" id="logo" className={style.input} />
              </div>
            </div>
          </div>
          <button className={style.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className={style.table}>
        <h2 className={style.title}>Company List</h2>
        <DataTable columns={columns} data={data} pagination></DataTable>
      </div>
      <div className={style.popup}>
        <div className={style.background} onClick={onPopupImage}></div>
        <div className={style.box}>
          <img src={image} alt="Company's logo" />
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
