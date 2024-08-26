import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
// import "react-calendar/dist/Calendar.css"; // css import

function MyCalendar({ startDate, endDate }) {
  // const dateRange = [new Date(dateArray[0]), new Date(dateArray[1])];
  const [today, setToday] = useState(new Date());
  const [startDay, setStartDay] = useState(new Date(startDate));
  const [endDay, setEndDay] = useState(new Date(endDate));
  const dateRange = [startDay, endDay];
  const formatShortWeekday = (locale, date) => {
    const weekdays = ["M", "T", "W", "T", "F", "S", "S"];
    return weekdays[date.getUTCDay()];
  };
  return (
    <div>
      <Calendar
        locale="en-US"
        formatShortWeekday={formatShortWeekday}
        value={dateRange}
        onViewChange={(view) => {
          if (view === "month") {
            setStartDay(new Date(startDate));
            setEndDay(new Date(endDate));
          }
        }}
        onActiveStartDateChange={({ activeStartDate, view }) => {
          if (view === "month") {
            setToday(activeStartDate);
          }
        }}
        activeStartDate={today}
      />
    </div>
  );
}

export default React.memo(MyCalendar);
