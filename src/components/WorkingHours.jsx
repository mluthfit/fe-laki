import React from "react";
import "./css/working-hours.css";

class WorkingHours extends React.Component {
  render() {
    return (
      <div className="working-hours">
        <div className="date-month-year">
          <span className="title">DATE</span>
          <div className="value">
            <span className="date">14</span>
            <span className="month-year">March 2022</span>
          </div>
        </div>
        <div className="clock-in">
          <span className="title">Clock In</span>
          <span className="value">08:00</span>
        </div>
        <div className="date">
          <span className="title">Clock Out</span>
          <span className="value">15:00</span>
        </div>
      </div>
    );
  }
}

export default WorkingHours;
