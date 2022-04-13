import React, { useState } from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import Employee from "./components/Employee";
import "./App.css";

const App = () => {
  const [page, setPage] = useState("home");

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <Topbar />
      <main>
        <Sidebar onChangePage={onChangePage} />
        {page === "home" && <Home />}
        {page === "tasks" && <Tasks />}
        {page === "employee" && <Employee />}
      </main>
    </div>
  );
};

export default App;
