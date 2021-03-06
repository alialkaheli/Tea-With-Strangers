import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const HostDelete = (props) => {
 const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let date = new Date(props.event.date).getUTCDay();
  let weekday = weekdays[date];
  const obj = props.event.date.split("-");

  let day = obj[2]
  const monthName = { "01": "January", "02": "Febuary", "03": "March", "04": "April", "05": "May", "06": "June", "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December" };

  let month = monthName[obj[1].toString()]
  let ampm = false;
  let setTime = props.event.time.split(":")
  if (setTime[0] > 12) {
    setTime[0] -= 12
    ampm = true
  }
  setTime = setTime.join(":")
  if (ampm === true) {
    setTime += "PM"
  } else {
    setTime += "AM"
  }
  return <div className="dash-row">
      <div className="dash-card">
        <Link to={`/events/${props.event.id}`}>
          <div className="top-dash-card">
            <p className="dash-address1">{weekday}</p>
            <p className="dash-date">
              {month} {day}
            </p>
            <p className="dash-time">{setTime}</p>
            <p className="dash-address">{props.event.address}</p>
          </div>
        </Link>

        <div className="bottom-dash-card">
          <div className="event-select1">
            <div className="edit-btn">
              <Link to={`/events/${props.event.id}/edit`}>Edit</Link>
            </div>
            <div className="edit-btn" onClick={() => props.deleteEvent(props.event.id)}>
              Delete
            </div>
          </div>
        </div>
      </div>
      <div className="dash-host">
        <p>Your are the Host</p>
        <div className="dash-sub-div">
          <div className="profile-pic-events">
            <img src={props.event.image} />
          </div>
          <p>Your are the host good luck with your meet up and your game. :).</p>
        </div>
        <div className="dash-buttons">
          <button className="no-cursor-fb">Facebook</button>
          <button className="no-cursor-twitter">Twitter</button>
        </div>
      </div>
    </div>;

  }
export default withRouter(HostDelete);
