import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Presence from "./components/Presence";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <main>
        <Sidebar />
        <Presence />
      </main>
    </div>
  );
}

export default App;
