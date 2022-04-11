import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <main>
        <Sidebar />
        <Home />
      </main>
    </div>
  );
}

export default App;
