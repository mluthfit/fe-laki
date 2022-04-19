import React from "react";
import "./css/presence.css";

class Presence extends React.Component {
  render() {
    return (
      <div className="presence">
        <div className="content-camera">CAMERA</div>

        <div className="flex-container">
          <div>
            <input className="button" type={"submit"} value="Capture" />
          </div>
          <div>
            <input className="button" type={"submit"} value="Presence" />
          </div>
        </div>
      </div>
    );
  }
}

export default Presence;
