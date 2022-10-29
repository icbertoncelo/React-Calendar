import { useContext } from "react";

import { ThemeContext } from "@contexts";

export function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}
