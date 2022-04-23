import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./css/company-list.css";

const CompanyList = () => {
  const onHandleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="company-list">
      <div className="insert-company">
        <h2>Insert Company</h2>
        <form onClick={onHandleSubmit}>
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
            <div className="form-group form-file">
              <label htmlFor="logo">Logo</label>
              {/* <button className="file-btn">Insert Logo Here...</button> */}
              <input type="file" name="logo" id="logo" className="input-file" />
            </div>
          </div>
          <button className="submit-btn" type="submit">
            Create Company
          </button>
        </form>
      </div>
      <div className="company-table">
        <table>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Addhess</th>
            <th>Phone Numbeh</th>
            <th>Email</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>1</td>
            <td>Teslad Crop</td>
            <td>Jl. Jendral Sudirman</td>
            <td>+62 82390128123</td>
            <td>admin@super.co.id</td>
            <td>
              <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
            </td>
            <td>Edit</td>
            <td>Details</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CompanyList;
