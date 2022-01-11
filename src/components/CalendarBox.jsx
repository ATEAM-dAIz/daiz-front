import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";

import "./CalendarBox.scss";

const CalendarBox = ({ fullScreen }) => {
  const [value, onChange] = useState(new Date());
  const marks = [
    "03-12-2021",
    "07-12-2021",
    "12-12-2021",
    "13-12-2021",
    "23-12-2021",
    "25-12-2021",
    "03-01-2022",
    "07-01-2022",
    "12-01-2022",
    "13-01-2022",
    "15-01-2022",
  ];
  return (
    <div className="calendar-container">
      {fullScreen ? (
        ""
      ) : (
        <Calendar
          onChange={onChange}
          value={value}
          locale="en-EN"
          tileClassName={({ date, view }) => {
            if (marks.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
              return "highlight";
            }
          }}
        />
      )}
    </div>
  );
};

export default CalendarBox;
