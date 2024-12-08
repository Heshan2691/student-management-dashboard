import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarComponent.css";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Calendar
        onChange={onChange}
        value={date}
        className="react-calendar"
        tileClassName={({ date, view }) =>
          view === "month" && date.getDay() === 0 ? "highlight-sunday" : null
        }
      />
    </div>
  );
};

export default CalendarComponent;
