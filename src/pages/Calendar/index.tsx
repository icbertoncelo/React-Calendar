import { useTheme } from "@hooks";

import { CalendarContainer, ThemeButton } from "./styles";

export function Calendar() {
  const { theme, onChangeTheme } = useTheme();

  return (
    <CalendarContainer>
      <ThemeButton onClick={onChangeTheme}>{theme}</ThemeButton>
    </CalendarContainer>
  );
}
