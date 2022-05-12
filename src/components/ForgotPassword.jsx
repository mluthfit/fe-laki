import React, { useState } from "react";
import style from "./css/auth.module.css";
import axios from "axios";
import env from "../scripts/Environment";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [alertForm, setAlertForm] = useState({});
  const [emailError, setEmailError] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setEmailError([]);
    try {
      const body = { email };
      const { data } = await axios.post(
        `${env.API_URL}/auth/forgot-password`,
        body,
        env.OPTIONS_AXIOS
      );

      setAlertForm(data);
    } catch (error) {
      const { data } = error.response;
      if (data?.validations) {
        setEmailError(data?.validations?.email ?? []);
      } else {
        setAlertForm(data);
      }
    }
  };

  return (
    <div className={style.auth}>
      <div className={style.container}>
        <h2>Forgot Password</h2>
        <form onSubmit={onSubmit}>
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
          {Object.keys(alertForm).length > 0 && (
            <div className={alertForm.success ? style.success : style.error}>
              <span>{alertForm.messages}</span>
            </div>
          )}
          <button type="submit" className={style.submit}>
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
