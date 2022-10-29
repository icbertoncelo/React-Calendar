import { useTheme } from "@hooks";

import {
  CalendarContainer,
  CalendarContent,
  CalendarDaysContent,
  CalendarHeader,
  CalendarWeekdaysHeader,
  ThemeButton,
} from "./styles";

const WEEKDAYS = ["D", "S", "T", "Q", "Q", "S", "S"];

export function Calendar() {
  const { theme, onChangeTheme } = useTheme();

  return (
    <CalendarContainer>
      <ThemeButton onClick={onChangeTheme}>{theme}</ThemeButton>

      <CalendarContent>
        <CalendarHeader>
          <button onClick={() => console.log("test")}> {`<<`} </button>
          <button onClick={() => console.log("test")}> {`<`} </button>
          <button onClick={() => console.log("test")}>November</button>
          <button onClick={() => console.log("test")}> {`>`} </button>
          <button onClick={() => console.log("test")}> {`>>`} </button>
        </CalendarHeader>
        <CalendarWeekdaysHeader>
          {WEEKDAYS.map((weekday) => (
            <span>{weekday}</span>
          ))}
        </CalendarWeekdaysHeader>
        <CalendarDaysContent>
          {Array(35)
            .fill(1)
            .map((item) => (
              <button>{item}</button>
            ))}
        </CalendarDaysContent>
      </CalendarContent>
    </CalendarContainer>
  );
}
