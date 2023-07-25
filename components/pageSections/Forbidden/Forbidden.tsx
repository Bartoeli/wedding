import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import { H2 } from "@/components/atoms/H2/H2";
import accomRight from "../../../assets/flowers/accomRight.png";
import styles from "./Forbidden.module.scss";
import { SectionWrapper } from "@/components/atoms/SectionWrapper/SectionWrapper";
import { Flower } from "@/components/atoms/Flower/Flower";

export const Forbidden: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="forbidden">
      <SectionWrapper>
        <H2 text="forbidden_header" />
        <div>
          <p>{t("forbidden_info")}</p>
        </div>
      </SectionWrapper>
      <Flower left={false} source={accomRight} />
    </section>
  );
};
