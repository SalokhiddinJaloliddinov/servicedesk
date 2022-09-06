import "../styles/globals.css";
import "macro-css";
import type { AppProps } from "next/app";
import { theme } from "../theme";
import { ThemeProvider } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { store, wrapper } from "../redux/store";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SERVICEDESK - Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
