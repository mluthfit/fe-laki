import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import env from "./scripts/Environment";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import Employee from "./components/Employee";
import Presence from "./components/Presence";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import ShowProfile from "./components/ShowProfile";
import LandingPage from "./components/LandingPage";
import CompanyList from "./components/CompanyList";
import SuperUserList from "./components/SuperUserList";
import EmployeeAccounts from "./components/EmployeeAccounts";
import EmployeeDetails from "./components/EmployeeDetails";
import "./App.css";

const App = () => {
  const [page, setPage] = useState("home");
  const [isMenuOpen, setMenu] = useState(false);
  const [isLoggedIn, setLogged] = useState(false);
  const [companyUser, setCompanyUser] = useState({});
  const [userRole, setUserRole] = useState(0);

  const onChangePage = (page) => {
    setPage(page);
  };

  const onToggleMenu = () => {
    setMenu(!isMenuOpen);
  };

  useEffect(() => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const checkToken = async () => {
      try {
        const { data } = await axios.get(`${env.API_URL}/profiles`, options);

        setUserRole(data?.data?.user?.role);
        setLogged(true);
      } catch (error) {
        setLogged(false);
      }
    };

    checkToken();
  }, []);

  useEffect(() => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    if (!Object.keys(companyUser).length && isLoggedIn) {
      const getCompanyName = async () => {
        try {
          const { data } = await axios.get(`${env.API_URL}/profiles`, options);

          setCompanyUser({
            ...companyUser,
            company: data?.data?.company?.name,
            user_id: data?.data?.user_id,
          });
        } catch (error) {
          console.log(error);
        }
      };

      getCompanyName();
    }
  }, [companyUser, isLoggedIn]);

  return (
    <div className="App">
      <Topbar
        onToggleMenu={onToggleMenu}
        onChangePage={onChangePage}
        isLoggedIn={isLoggedIn}
        setLogged={setLogged}
        company={companyUser.company}
      />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <LandingPage />}
        />
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <Login setLogged={setLogged} />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route
          path="/forgot-password"
          element={
            !isLoggedIn ? <ForgotPassword /> : <Navigate to="/dashboard" />
          }
        />
        <Route
          path="/reset-password"
          element={
            !isLoggedIn ? <ResetPassword /> : <Navigate to="/dashboard" />
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <main>
                <Sidebar
                  onChangePage={onChangePage}
                  isMenuOpen={isMenuOpen}
                  userRole={userRole}
                />
                {page === "home" && <Home />}
                {page === "tasks" && <Tasks userId={companyUser.user_id} />}
                {page === "employee" && <Employee />}
                {page === "presence" && <Presence />}
                {page === "show-profile" && <ShowProfile />}
                {page === "super-user-list" && <SuperUserList />}
                {page === "company-list" && <CompanyList />}
                {page === "employee-accounts" && <EmployeeAccounts />}
                {page === "employee-details" && <EmployeeDetails />}
              </main>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
