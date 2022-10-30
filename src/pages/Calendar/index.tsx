import { useState } from "react";

import { useTheme } from "@hooks";
import {
  differenceInDays,
  endOfMonth,
  startOfMonth,
  add,
  sub,
  format,
  set,
} from "date-fns";
import { DayCell } from "src/components/DayCell";

import {
  CalendarContainer,
  CalendarContent,
  CalendarHeader,
  CalendarWeekdaysHeader,
  ThemeButton,
  CalendarDaysContent,
} from "./styles";
import { themeButtonText, WEEKDAYS } from "./utils";

export function Calendar() {
  const { theme, onChangeTheme } = useTheme();

  const [currentDate, setCurrentDate] = useState(new Date());

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const monthDaysQuantity = differenceInDays(endDate, startDate) + 1;
  const firstDayOfMonthOnWeek = startDate.getDay();

  function prevMonth() {
    setCurrentDate((prevCurrentDate) => sub(prevCurrentDate, { months: 1 }));
  }
  function nextMonth() {
    setCurrentDate((prevCurrentDate) => add(prevCurrentDate, { months: 1 }));
  }
  function prevYear() {
    setCurrentDate((prevCurrentDate) => sub(prevCurrentDate, { years: 1 }));
  }
  function nextYear() {
    setCurrentDate((prevCurrentDate) => add(prevCurrentDate, { years: 1 }));
  }

  return (
    <CalendarContainer>
      <ThemeButton onClick={onChangeTheme}>
        {themeButtonText[theme]}
      </ThemeButton>

      <CalendarContent>
        <CalendarHeader>
          <button onClick={prevYear}> {`<<`} </button>
          <button onClick={prevMonth}> {`<`} </button>
          <span>{format(currentDate, "LLLL yyyy")}</span>
          <button onClick={nextMonth}> {`>`} </button>
          <button onClick={nextYear}> {`>>`} </button>
        </CalendarHeader>

        <CalendarWeekdaysHeader>
          {WEEKDAYS.map((weekday) => (
            <span key={weekday}>{weekday}</span>
          ))}
        </CalendarWeekdaysHeader>

        <CalendarDaysContent>
          {Array.from({ length: firstDayOfMonthOnWeek }).map((_, index) => (
            <DayCell key={index} disabled />
          ))}

          {Array.from({ length: monthDaysQuantity }).map((_, index) => {
            const day = index + 1;
            const selectedDate = set(currentDate, { date: day });

            return (
              <DayCell key={day} date={selectedDate}>
                {String(day)}
              </DayCell>
            );
          })}
        </CalendarDaysContent>
      </CalendarContent>
    </CalendarContainer>
  );
}
