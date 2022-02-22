import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";

import "./CalendarBox.scss";
import { useSelector } from "react-redux";

const CalendarBox = ({ fullScreen }) => {
  const marks = useSelector((state) => state.diaryReducer.date);
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
