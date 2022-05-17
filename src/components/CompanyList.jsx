import axios from "axios";
import env from "../scripts/Environment";
import style from "./css/companies.module.css";
import DataTable from "react-data-table-component";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faEye } from "@fortawesome/free-solid-svg-icons";

const CompanyList = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [logo, setLogo] = useState("");
  const [nameError, setNameError] = useState([]);
  const [addressError, setAddressError] = useState([]);
  const [phoneError, setPhoneError] = useState([]);
  const [emailError, setEmailError] = useState([]);
  const [websiteError, setWebsiteError] = useState([]);
  const [logoError, setLogoError] = useState([]);
  const [formSuccess, setFormSuccess] = useState("");
  const [companyId, setCompanyId] = useState(0);
  const [companyList, setCompanyList] = useState([]);

  const onPopupImage = (event) => {
    event.stopPropagation();
    const popUp = document.getElementsByClassName(style.popup)[0];
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

  const onResetError = () => {
    setNameError([]);
    setAddressError([]);
    setPhoneError([]);
    setEmailError([]);
    setWebsiteError([]);
    setLogoError([]);
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    onResetError();

    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const body = new FormData();

      if (companyId) body.append("company_id", companyId);
      body.append("name", name);
      body.append("address", address);
      body.append("phone", phone);
      body.append("email", email);
      body.append("website", website);
      if (logo) body.append("logo", logo);

      const { data } = await axios.post(
        `${env.API_URL}/admin/companies`,
        body,
        options
      );

      setFormSuccess(data?.messages ?? "");
      onChangeValue();
      setCompanyId(0);
      fetchCompany();
    } catch (error) {
      const { data } = error.response;
      console.log(data.message);
      if (data?.validations) {
        setNameError(data.validations?.name ?? []);
        setAddressError(data.validations?.address ?? []);
        setPhoneError(data.validations?.phone ?? []);
        setEmailError(data.validations?.email ?? []);
        setWebsiteError(data.validations?.website ?? []);
        setLogoError(data.validations?.logo ?? []);
      }
    }
  };

  const fetchCompany = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { data } = await axios.get(
        `${env.API_URL}/admin/companies`,
        options
      );

      const mappingData = data?.data.map((item) => {
        return {
          id: item.id,
          name: item?.name ?? "-",
          address: item?.address ?? "-",
          phone: item?.phone ?? "-",
          email: item?.email ?? "-",
          website: item?.website,
          logo: item?.media?.storage_path,
        };
      });

      setCompanyList(mappingData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCompany();
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
              setImage(`${env.STORAGE_URL}/${row.logo}`);
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
            setCompanyId(row.id);
            onChangeValue(row);
          }}
        >
          Edit
        </span>
      ),
      grow: 0,
    },
  ];

  return (
    <div className={style.companies}>
      <div className={style.form}>
        {formSuccess && (
          <div className={style.success}>
            <span>{formSuccess}</span>
          </div>
        )}
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
              {nameError.length > 0 && (
                <div className={style.error}>
                  {nameError.map((error, index) => (
                    <span key={index}>{error}</span>
                  ))}
                </div>
              )}
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
              {addressError.length > 0 && (
                <div className={style.error}>
                  {addressError.map((error, index) => (
                    <span key={index}>{error}</span>
                  ))}
                </div>
              )}
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
              {phoneError.length > 0 && (
                <div className={style.error}>
                  {phoneError.map((error, index) => (
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
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Insert Email Here..."
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
              <label htmlFor="website">Website</label>
              <input
                className={style.input}
                type="text"
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Insert Website Link Here..."
              />
              {websiteError.length > 0 && (
                <div className={style.error}>
                  {websiteError.map((error, index) => (
                    <span key={index}>{error}</span>
                  ))}
                </div>
              )}
            </div>
            <div className={style.group}>
              <label htmlFor="logo">Logo</label>
              <div className={style.file}>
                <button className={style.button}>Insert Logo Here...</button>
                <input
                  type="file"
                  id="logo"
                  className={style.input}
                  onChange={(e) => setLogo(e.target.files[0])}
                />
              </div>
              {logoError.length > 0 && (
                <div className={style.error}>
                  {logoError.map((error, index) => (
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
        <h2 className={style.title}>Company List</h2>
        <DataTable columns={columns} data={companyList} pagination></DataTable>
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
