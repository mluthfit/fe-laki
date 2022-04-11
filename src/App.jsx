import Topbar from "./components/Topbar";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <main>
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
