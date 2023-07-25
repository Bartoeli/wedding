import React from "react";
import { useTranslation } from "react-i18next";

import { H2 } from "@/components/atoms/H2/H2";
import whenWhereFlower from "../../../assets/flowers/whenWhereRight.png";
import { SectionWrapper } from "@/components/atoms/SectionWrapper/SectionWrapper";
import { Flower } from "@/components/atoms/Flower/Flower";

export const Gifts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="gifts">
      <SectionWrapper>
        <H2 text="gifts_header" />
        <div>
          <p>{t("gifts_info")}</p>
        </div>
      </SectionWrapper>
      <Flower left={false} source={whenWhereFlower} />
    </section>
  );
};
