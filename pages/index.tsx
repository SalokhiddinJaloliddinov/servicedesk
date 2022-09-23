import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { wrapper } from "../redux/store";
import { parseCookies } from "nookies";
import { UserApi } from "../utils/api";
import { setUserData } from "../redux/slices/user";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={"wrapper"}>
        <div className={"leftSide"}>
          <Menu />
        </div>
        <div className={"content"}>
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  );
}
