import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function EmployeeMeetings() {

  const [staffMeetings, setStaffMeetings] = useState([]);

  const { id } = useParams();
  
  useEffect(() => {
    fetch(`/employees/${id}`)
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((staffData) => setStaffMeetings(staffData))
      }
    })
  }, [id])


return (
  <div>
    {staffMeetings.map((meetingInfo) => {
      return (
        <div key={meetingInfo.id}>
          {meetingInfo ? (
            <ul>
            <li>{meetingInfo.scheduled_date}</li>
            <li>{meetingInfo.title}</li>
            </ul>
          ) : (<h3>No meetings yet</h3>)
        }
        </div>
      )
    })}

  </div>
)

}

export default EmployeeMeetings;