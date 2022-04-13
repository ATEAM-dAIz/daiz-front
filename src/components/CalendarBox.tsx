import Calendar from "react-calendar";

import "./CalendarBox.scss";
import { useSelector } from "react-redux";
import { isMatch } from "date-fns";
import { RootState } from "../store";

const CalendarBox = ({ fullScreen }: { fullScreen: any }) => {
  const marks = useSelector((state: RootState) => state.diaryReducer.date);

  return (
    <div className="calendar-container">
      {fullScreen ? (
        ""
      ) : (
        <Calendar
          tileClassName={({ date }: { date: Date }) => {
            const newDate: string = date
              .toLocaleDateString("en-GB")
              .split("/")
              .reverse()
              .join("-");
            if (marks.find((mark) => isMatch(mark, newDate)))
              return "highlight";
            return null;
          }}
        />
      )}
    </div>
  );
};

export default CalendarBox;
