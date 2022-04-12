import React from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: "home" };
  }

  changePage = (page) => {
    this.setState({ isOpen: page });
  };

  render() {
    return (
      <div className="App">
        <Topbar />
        <main>
          <Sidebar changePage={this.changePage} />
          {this.state.isOpen === "home" && <Home />}
          {this.state.isOpen === "tasks" && <Tasks />}
        </main>
      </div>
    );
  }
}

export default App;
