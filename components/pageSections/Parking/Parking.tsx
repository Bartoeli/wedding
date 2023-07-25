import React from "react";
import { useTranslation } from "react-i18next";

import { H2 } from "@/components/atoms/H2/H2";
import scheduleLeft from "../../../assets/flowers/scheduleLeft.png";
import { SectionWrapper } from "@/components/atoms/SectionWrapper/SectionWrapper";
import { Flower } from "@/components/atoms/Flower/Flower";

export const Parking: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="parking">
      <SectionWrapper>
        <H2 text="parking_header" />
        <div>
          <p>{t("parking_info")}</p>
        </div>
      </SectionWrapper>
      <Flower left source={scheduleLeft} />
    </section>
  );
};
