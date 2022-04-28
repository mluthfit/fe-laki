import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
  const [user, setUser] = useState({});

  const onChangePage = (page) => {
    setPage(page);
  };

  const onToggleMenu = () => {
    setMenu(!isMenuOpen);
  };

  const token = localStorage.getItem("tokedn");
  console.log(token);

  return (
    <div className="App">
      <Topbar
        onToggleMenu={onToggleMenu}
        onChangePage={onChangePage}
        isLoggedIn={isLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <LandingPage />}
        />
        <Route path="/login" element={<Login setLogged={setLogged} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <main>
                <Sidebar
                  onChangePage={onChangePage}
                  isMenuOpen={isMenuOpen}
                  user={user}
                />
                {page === "home" && <Home />}
                {page === "tasks" && <Tasks />}
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
