import Calendar from "react-calendar";

import "./CalendarBox.scss";
import { isMatch } from "date-fns";
import { useAppSelector } from "../store";

const CalendarBox = ({ fullScreen }: { fullScreen: boolean }) => {
  const marks = useAppSelector((state) => state.diaryReducer);
  const onHighlight = (date: Date) => {
    const newDate: string = date
      .toLocaleDateString("en-GB")
      .split("/")
      .reverse()
      .join("-");
    if (marks.find((mark) => isMatch(mark, newDate))) return "highlight";
    return null;
  };

  return (
    <div className="calendar-container">
      {fullScreen ? (
        ""
      ) : (
        <Calendar tileClassName={({ date }) => onHighlight(date)} />
      )}
    </div>
  );
};

export default CalendarBox;
