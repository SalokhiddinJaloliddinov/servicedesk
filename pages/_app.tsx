import "../styles/globals.css";
import "macro-css";
import type { AppProps } from "next/app";
import { theme } from "../theme";
import { ThemeProvider } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
