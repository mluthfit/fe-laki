import React, { useState } from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import Employee from "./components/Employee";
import "./App.css";

const App = () => {
  const [page, setPage] = useState("home");
  const [isMenuOpen, setMenu] = useState(false);

  const onChangePage = (page) => {
    setPage(page);
  };

  const onToggleMenu = () => {
    setMenu(!isMenuOpen);
  };

  return (
    <div className="App">
      <Topbar onToggleMenu={onToggleMenu} />
      <main>
        <Sidebar onChangePage={onChangePage} isMenuOpen={isMenuOpen} />
        {page === "home" && <Home />}
        {page === "tasks" && <Tasks />}
        {page === "employee" && <Employee />}
      </main>
    </div>
  );
};

export default App;
