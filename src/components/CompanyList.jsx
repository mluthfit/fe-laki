import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import "./css/company-list.css";

const CompanyList = () => {
  const [image, setImage] = useState("https://via.placeholder.com/151");
  const onPopupImage = (event) => {
    event.stopPropagation();
    const logoPopup = document.querySelector(".logo-popup");
    if (!logoPopup) return;

    logoPopup.classList.toggle("open");
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
  };

  const columns = [
    {
      name: "#",
      cell: (_, index) => index + 1,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
      grow: 2,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Web",
      cell: (row) => (
        <a
          href={row.website}
          target="_blank"
          rel="noopener noreferrer"
          className="web-button"
        >
          <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
        </a>
      ),
      grow: 0,
    },
    {
      name: "Logo",
      cell: (row) => (
        <span
          className="logo-button"
          onClick={(e) => {
            setImage(row.logo);
            onPopupImage(e);
            console.log(image);
          }}
        >
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </span>
      ),
      grow: 0,
    },
    {
      name: "Action",
      cell: (row) => (
        <span className="edit-button">
          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
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
      website: "https://www.google.com",
      logo: "https://via.placeholder.com/151",
    },
    {
      id: 2,
      name: "Super Inc.",
      address: "JL. Jend. Sudirman",
      phone: "+62 82323487654",
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
    {
      id: 6,
      name: "Super Inc.",
      address: "JL. Jend. Sudirman",
      phone: "+62 82323487654",
      email: "admin@super.co.id",
      website: "https://www.facebook.com",
      logo: "https://via.placeholder.com/151",
    },
    {
      id: 7,
      name: "Teslah Crop.",
      address: "JL. Lorem Ipsum",
      phone: "+62 82345679876",
      email: "noreply@teslah.com",
      website: "https://www.google.com",
      logo: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Super Inc.",
      address: "JL. Jend. Sudirman",
      phone: "+62 82323487654",
      email: "admin@super.co.id",
      website: "https://www.facebook.com",
      logo: "https://via.placeholder.com/151",
    },
    {
      id: 9,
      name: "Teslah Crop.",
      address: "JL. Lorem Ipsum",
      phone: "+62 82345679876",
      email: "noreply@teslah.com",
      website: "https://www.google.com",
      logo: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Super Inc.",
      address: "JL. Jend. Sudirman",
      phone: "+62 82323487654",
      email: "admin@super.co.id",
      website: "https://www.facebook.com",
      logo: "https://via.placeholder.com/151",
    },
    {
      id: 11,
      name: "Teslah Crop.",
      address: "JL. Lorem Ipsum",
      phone: "+62 82345679876",
      email: "noreply@teslah.com",
      website: "https://www.google.com",
      logo: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      name: "Super Inc.",
      address: "JL. Jend. Sudirman",
      phone: "+62 82323487654",
      email: "admin@super.co.id",
      website: "https://www.facebook.com",
      logo: "https://via.placeholder.com/151",
    },
    {
      id: 13,
      name: "Teslah Crop.",
      address: "JL. Lorem Ipsum",
      phone: "+62 82345679876",
      email: "noreply@teslah.com",
      website: "https://www.google.com",
      logo: "https://via.placeholder.com/150",
    },
    {
      id: 14,
      name: "Super Inc.",
      address: "JL. Jend. Sudirman",
      phone: "+62 82323487654",
      email: "admin@super.co.id",
      website: "https://www.facebook.com",
      logo: "https://via.placeholder.com/151",
    },
    {
      id: 15,
      name: "Teslah Crop.",
      address: "JL. Lorem Ipsum",
      phone: "+62 82345679876",
      email: "noreply@teslah.com",
      website: "https://www.google.com",
      logo: "https://via.placeholder.com/150",
    },
    {
      id: 16,
      name: "Super Inc.",
      address: "JL. Jend. Sudirman",
      phone: "+62 82323487654",
      email: "admin@super.co.id",
      website: "https://www.facebook.com",
      logo: "https://via.placeholder.com/151",
    },
  ];

  return (
    <div className="company-list">
      <div className="insert-company">
        <h2>Insert Company</h2>
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
                type="text"
                name="name"
                id="name"
                placeholder="Insert Company Name Here..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                className="input-general"
                type="text"
                name="address"
                id="address"
                placeholder="Insert Company Address Here..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                className="input-general"
                type="text"
                name="phone"
                id="phone"
                placeholder="Insert Phone Number Here..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="input-general"
                type="email"
                name="email"
                id="email"
                placeholder="Insert Email Here..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input
                className="input-general"
                type="text"
                name="website"
                id="website"
                placeholder="Insert Website Link Here..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="logo">Logo</label>
              <div className="form-file">
                <button className="file-button">Insert Logo Here...</button>
                <input
                  type="file"
                  name="logo"
                  id="logo"
                  className="input-file"
                />
              </div>
            </div>
          </div>
          <button className="submit-btn" type="submit">
            Create Company
          </button>
        </form>
      </div>
      <div className="company-table">
        {/* <table>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Web</th>
            <th>Logo</th>
            <th>Action</th>
          </tr>
          <tr className="tbody">
            <td>1</td>
            <td>Teslad Crop</td>
            <td>Jl. Jendral Sudirman</td>
            <td>+62 82390128123</td>
            <td>admin@super.co.id</td>
            <td>
              <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
            </td>
            <td>
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </td>
            <td>
              <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
            </td>
          </tr>
          <tr className="tbody">
            <td>1</td>
            <td>Teslad Crop</td>
            <td>Jl. Jendral Sudirman</td>
            <td>+62 82390128123</td>
            <td>admin@super.co.id</td>
            <td>
              <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
            </td>
            <td>
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </td>
            <td>
              <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
            </td>
          </tr>
        </table> */}
        <h2 className="title">Company List</h2>
        <DataTable columns={columns} data={data} pagination></DataTable>
      </div>
      <div className="logo-popup">
        <div className="background-popup" onClick={onPopupImage}></div>
        <div className="popup-box">
          <img src={image} alt="Company's logo" />
        </div>
      </div>
      <span onClick={onPopupImage}>Click here</span>
    </div>
  );
};

export default CompanyList;
