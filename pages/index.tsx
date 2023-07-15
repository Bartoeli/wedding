import type { NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Header } from "@/components/pageSections/Header/Header";
import { Countdown } from "@/components/pageSections/Countdown/Countdown";
import { Greetings } from "@/components/pageSections/Greetings/Greetings";
import { useGetData } from "@/utils/useGetData";
import { WhenWhere } from "@/components/pageSections/WhenWhere/WhenWhere";
import { Schedule } from "@/components/pageSections/Schedule/Schedule";
import { Accommodation } from "@/components/pageSections/Accommodation/Accommodation";

const Home: NextPage = () => {
  const data = useGetData();

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
        <Greetings data={data} />
        <WhenWhere />
        <Schedule />
        <Accommodation />
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
