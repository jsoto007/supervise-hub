import React from "react";
import EmployeeMenu from "./EmployeeMenu";
import EmployeeMeetings from "./EmployeeMeetings";

function CompletedMeetingsContainer() {

  return (
    <div>
      <div className="menu-container">
        <h3>Employees</h3>
      <EmployeeMenu />
      </div>

      <div className="meetings-container">
        <h3>Employees Meetings</h3>
      <EmployeeMeetings />
      </div>
    </div>
  )
}

export default CompletedMeetingsContainer;