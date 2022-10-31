import { createContext, useState, useCallback } from "react";

import { ThemeProvider as SCThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../../styles/themes";
import { IThemeProviderProps, ThemeProviderData, ThemeType } from "./types";

export const ThemeContext = createContext<ThemeProviderData>(
  {} as ThemeProviderData
);

export const convertThemeData = {
  dark: darkTheme,
  light: lightTheme,
};

export function ThemeProvider({ children }: IThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>("light");

  const onChangeTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onChangeTheme,
      }}
    >
      <SCThemeProvider theme={convertThemeData[theme]}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
}
