import { ThemeProvider } from "./contexts/theme";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

export function Main() {
  return (
    <ThemeProvider>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}
