import React from "react";
import Calendar from "react-calendar";

import "./CalendarBox.scss";
import { useSelector } from "react-redux";
import { isMatch } from "date-fns";

const CalendarBox = ({ fullScreen }) => {
  const marks = useSelector((state) => state.diaryReducer);

  return (
    <div className="calendar-container">
      {fullScreen ? (
        ""
      ) : (
        <Calendar
          tileClassName={({ date }) => {
            date = date
              .toLocaleDateString("en-GB")
              .split("/")
              .reverse()
              .join("-");
            if (marks.find((mark) => isMatch(mark, date))) return "highlight";
          }}
        />
      )}
    </div>
  );
};

export default CalendarBox;
