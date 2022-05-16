import axios from "axios";
import env from "../scripts/Environment";
import style from "./css/show-profile.module.css";
import Profile from "./Profile";
import React, { useState, useEffect } from "react";

const ShowProfile = () => {
  const [image, setImage] = useState("");
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  const [nameError, setNameError] = useState([]);
  const [emailError, setEmailError] = useState([]);
  const [photoError, setPhotoError] = useState([]);
  const [oldPasswordError, setOldPasswordError] = useState([]);
  const [newPasswordError, setNewPasswordError] = useState([]);
  const [newConfirmPasswordError, setNewConfirmPasswordError] = useState([]);
  const [formSuccess, setFormSuccess] = useState("");

  const onClearPassword = () => {
    setOldPassword("");
    setNewPassword("");
    setNewConfirmPassword("");
  };

  const onResetError = () => {
    setNameError([]);
    setOldPasswordError([]);
    setNewPasswordError([]);
    setEmailError([]);
    setNewConfirmPasswordError([]);
    setPhotoError([]);
  };

  const onSaveProfile = async (e) => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      e.preventDefault();
      onResetError();

      const body = new FormData();
      body.append("name", name);
      body.append("email", email);
      if (photo) body.append("photo", photo);

      const { data } = await axios.post(
        `${env.API_URL}/profiles/edit-profile`,
        body,
        options
      );

      console.log(data);
      setFormSuccess(data?.messages ?? "");
      fetchProfile();
    } catch (error) {
      const { data } = error.response;
      console.log(data);
      if (data?.validations) {
        setNameError(data.validations?.name ?? []);
        setEmailError(data.validations?.email ?? []);
        setPhotoError(data.validations?.photo ?? []);
      }
    }
  };

  const onSavePassword = async (e) => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      e.preventDefault();
      onResetError();

      const body = {
        password: oldPassword,
        new_password: newPassword,
        confirm_new_password: newConfirmPassword,
      };

      const { data } = await axios.post(
        `${env.API_URL}/profiles/edit-password`,
        body,
        options
      );

      setFormSuccess(data?.messages ?? "");
    } catch (error) {
      const { data } = error.response;
      if (data?.validations) {
        setOldPasswordError(data.validations?.password ?? []);
        setNewPasswordError(data.validations?.new_password ?? []);
        setNewConfirmPasswordError(
          data.validations?.confirm_new_password ?? []
        );
      }
    }

    onClearPassword();
  };

  const fetchProfile = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { data } = await axios.get(`${env.API_URL}/profiles`, options);

      setUser({
        email: data?.data?.user?.email,
        name: data?.data?.name,
        position: data?.data?.position,
        company: data?.data?.company?.name,
      });

      setImage(data?.data?.media?.storage_path ?? "");
      setName(data?.data?.name ?? "");
      setEmail(data?.data?.user?.email ?? "");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className={style.show}>
      <div className={style.profile}>
        {formSuccess && (
          <div className={style.success}>
            <span>{formSuccess}</span>
          </div>
        )}
        <Profile data={user} image={image}></Profile>
      </div>
      <div className={style.form}>
        <div className={style.big}>
          <h3>EDIT PROFILE</h3>
          <form onSubmit={onSaveProfile}>
            <div className={style.group}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <label htmlFor="photo">Photo</label>
              <div className={style.file}>
                <button className={style.button}>Insert Photo Here...</button>
                <input
                  type="file"
                  id="photo"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </div>
              {photoError.length > 0 && (
                <div className={style.error}>
                  {photoError.map((error, index) => (
                    <span key={index}>{error}</span>
                  ))}
                </div>
              )}
            </div>
            <button type="submit" className={style.submit}>
              SAVE
            </button>
          </form>
        </div>
        <div className={style.big}>
          <h3>EDIT PASSWORD</h3>
          <form onSubmit={onSavePassword}>
            <div className={style.group}>
              <label htmlFor="old-password">Old Password</label>
              <input
                type="password"
                id="old-password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              {oldPasswordError.length > 0 && (
                <div className={style.error}>
                  {oldPasswordError.map((error, index) => (
                    <span key={index}>{error}</span>
                  ))}
                </div>
              )}
            </div>
            <div className={style.group}>
              <label htmlFor="new-password">New Password</label>
              <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              {newPasswordError.length > 0 && (
                <div className={style.error}>
                  {newPasswordError.map((error, index) => (
                    <span key={index}>{error}</span>
                  ))}
                </div>
              )}
            </div>
            <div className={style.group}>
              <label htmlFor="confirm-new-password">Confirm New Password</label>
              <input
                type="password"
                id="confirm-new-password"
                value={newConfirmPassword}
                onChange={(e) => setNewConfirmPassword(e.target.value)}
              />
              {newConfirmPasswordError.length > 0 && (
                <div className={style.error}>
                  {newConfirmPasswordError.map((error, index) => (
                    <span key={index}>{error}</span>
                  ))}
                </div>
              )}
            </div>
            <button type="submit" className={style.submit}>
              SAVE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShowProfile;
