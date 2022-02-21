import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";

import "./CalendarBox.scss";

const CalendarBox = ({ fullScreen }) => {
  let marks = localStorage.getItem("persist:root");
  marks = JSON.parse(marks)["diaryReducer"];
  marks = JSON.parse(marks)["date"];
  console.log(marks);

  const [value, onChange] = useState(new Date());

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
            if (marks.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
              return "highlight";
            }
          }}
        />
      )}
    </div>
  );
};

export default CalendarBox;
