import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Header } from "@/components/pageSections/Header/Header";
import { Countdown } from "@/components/pageSections/Countdown/Countdown";
import { Greetings } from "@/components/pageSections/Greetings/Greetings";
import { useGetData } from "@/utils/useGetData";
import { WhenWhere } from "@/components/pageSections/WhenWhere/WhenWhere";
import { Schedule } from "@/components/pageSections/Schedule/Schedule";
import { Accommodation } from "@/components/pageSections/Accommodation/Accommodation";
import { Parking } from "@/components/pageSections/Parking/Parking";
import { Gifts } from "@/components/pageSections/Gifts/Gifts";
import { WhatToWear } from "@/components/pageSections/WhatToWear/WhatToWear";
import { Forbidden } from "@/components/pageSections/Forbidden/Forbidden";
import { Contacts } from "@/components/pageSections/Contacts/Contacts";
import { BottomSection } from "@/components/pageSections/BottomSection/BottomSection";
import { Breakfast } from "@/components/pageSections/Breakfast/Breakfast";

const MartinaIsabela: NextPage = () => {
  const data = useGetData();

  return (
    <>
      <Countdown />
      <Header />
      <Greetings data={data} />
      <WhenWhere />
      <Schedule />
      <Accommodation data={data} />
      <Parking />
      <Gifts />
      <WhatToWear />
      <Forbidden />
      <Breakfast />
      <Contacts />
      <BottomSection />
    </>
  );
};

export default MartinaIsabela;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}
