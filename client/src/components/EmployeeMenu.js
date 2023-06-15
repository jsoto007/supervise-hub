import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeMenu() {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch(`/completed-meetings`)
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((employeeList) => setEmployees(employeeList))
      }
    })
  }, [])

  return (
    <div className="menu-container">
      {employees.map((emp)=> {
        return (
          <EmployeeCard  employeeInfo={emp.employee} key={emp.id}/>
        )
      })}
    </div>
  )
}



export default EmployeeMenu;

