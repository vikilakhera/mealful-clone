import React from 'react';
import "./common.css";

const dates = [
    { day: "Thu", date: "05"},
    { day: "Fri", date: "06"},
    { day: "Sat", date: "07"},
    { day: "Sun", date: "08"},
    { day: "Mon", date: "09"},
    { day: "Tue", date: "10"},
    { day: "Wed", date: "11"}
]

function Calendar() {
    const isActive = "calendar-btn active-btn"
    const isNotActive = "calendar-btn"
    return(
        <div className="calendar-container">
            {
                dates.map(d => (
                    <button className={d.day === "Fri" ? (isActive) : (isNotActive)}>
                        <div className="day">
                            {d.day}
                        </div>
                        <div className="date">
                            {d.date}
                        </div>
                    </button>
                ))
            }
        </div>
        
    )
}

export default Calendar;