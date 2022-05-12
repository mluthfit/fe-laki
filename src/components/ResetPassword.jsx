import React, { useState } from "react";
import style from "./css/auth.module.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import env from "../scripts/Environment";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);
  const [confirmPasswordError, setConfirmPasswordError] = useState([]);
  const [alertForm, setAlertForm] = useState({});

  const onResetError = () => {
    setEmailError([]);
    setPasswordError([]);
    setConfirmPasswordError([]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    onResetError();

    try {
      const body = {
        token: searchParams.get("token"),
        email,
        password,
        confirm_password: confirmPassword,
      };

      const { data } = await axios.post(
        `${env.API_URL}/auth/reset-password`,
        body,
        env.OPTIONS_AXIOS
      );

      console.log(data);
      setAlertForm(data);

      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      const { data } = error.response;
      console.log(data);
      if (data?.validations) {
        setEmailError(data?.validations?.email ?? []);
        setPasswordError(data?.validations?.password ?? []);
        setConfirmPasswordError(data?.validations?.confirm_password ?? []);
      } else {
        setAlertForm(data);
      }

      setEmail("");
    }
  };

  return (
    <div className={style.auth}>
      <div className={style.container}>
        <h2>Reset Password</h2>
        <form onSubmit={onSubmit}>
          <div className={style.big}>
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
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPasswordError.length > 0 && (
                <div className={style.error}>
                  {confirmPasswordError.map((error, index) => (
                    <span key={index}>{error}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
          {Object.keys(alertForm).length > 0 && (
            <div className={alertForm.success ? style.success : style.error}>
              <span>{alertForm.messages}</span>
            </div>
          )}
          <button type="submit" className={style.submit}>
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
