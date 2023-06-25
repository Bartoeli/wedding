import type { NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Header } from "@/components/pageSections/Header/Header";
import { Countdown } from "@/components/pageSections/Countdown/Countdown";
import { Timer } from "@/components/atoms/Timer/Timer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wedding</title>
        <meta name="description" content="Unarovi to be wedding page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Countdown />
        <Header />
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}
