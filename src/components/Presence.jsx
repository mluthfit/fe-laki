import React from "react";
import "./css/presence.css";

class Presence extends React.Component {
  hoverTitle = (e) => {
    const title = document.querySelectorAll(".title span");
    title.forEach((item) => {
      item.classList.remove("open");
    });

    e.target.className = "open";
  };

  render() {
    return (
      <div className="presence">
        <div className="content-camera">CAMERA</div>

        <div className="flex-container">
          <div><input className="button" type={"submit"} value="Capture" /></div>
          <div><input className="button" type={"submit"} value="Presence" /></div>
        </div>
      </div>
    );
  }
}

export default Presence;
