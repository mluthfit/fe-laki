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
import "./App.css";

const App = () => {
  const [page, setPage] = useState("home");
  const [isMenuOpen, setMenu] = useState(false);
  const [isLogged, setLogged] = useState(true);

  const onChangePage = (page) => {
    setPage(page);
  };

  const onToggleMenu = () => {
    setMenu(!isMenuOpen);
  };

  return (
    <div className="App">
      <Topbar onToggleMenu={onToggleMenu} onChangePage={onChangePage} />
      <Routes>
        <Route path="/" element={<div>Landing Page</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset" element={<ResetPassword />} />
        <Route
          path="/dashboard"
          element={
            isLogged ? (
              <main>
                <Sidebar onChangePage={onChangePage} isMenuOpen={isMenuOpen} />
                {page === "home" && <Home />}
                {page === "tasks" && <Tasks />}
                {page === "employee" && <Employee />}
                {page === "presence" && <Presence />}
                {page === "show-profile" && <ShowProfile />}
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
