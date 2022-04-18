import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import ShowProfile from "./components/ShowProfile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <main>
        <Sidebar />
        <ShowProfile />
      </main>
    </div>
  );
}

export default App;
