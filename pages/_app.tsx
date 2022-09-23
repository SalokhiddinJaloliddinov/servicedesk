import "../styles/globals.css";
import "macro-css";
import type { AppProps } from "next/app";
import { theme } from "../theme";
import { ThemeProvider } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { store, wrapper } from "../redux/store";
import Head from "next/head";
import { parseCookies } from "nookies";
import { UserApi } from "../utils/api";
import { selectUserData, setUserData } from "../redux/slices/user";
import { useAppSelector } from "../redux/hooks";
import { useRouter } from "next/router";

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

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ ctx, Component }) => {
      try {
        const { sd_token } = parseCookies(ctx);

        const userData = await UserApi.getProfile(sd_token);

        store.dispatch(setUserData(userData));
      } catch (err) {
        console.log(err);
      }
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
        },
      };
    }
);

export default wrapper.withRedux(MyApp);
