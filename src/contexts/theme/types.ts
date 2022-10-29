export interface IThemeProviderProps {
  children: React.ReactNode;
}

export type ThemeType = "light" | "dark";

export interface ThemeProviderData {
  theme: ThemeType;
  onChangeTheme: () => void;
}
