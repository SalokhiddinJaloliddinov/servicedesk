import Head from "next/head";
import { NextPage } from "next";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SERVICEDESK - Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
