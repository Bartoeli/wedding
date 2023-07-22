import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import { H2 } from "@/components/atoms/H2/H2";
import scheduleLeft from "../../../assets/flowers/scheduleLeft.png";
import styles from "./WhatToWear.module.scss";

export const WhatToWear: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="whatToWear">
      <H2 text="what_to_wear_header" />
      <div>
        <p>{t("what_to_wear_info")}</p>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image
            alt="flower"
            src={scheduleLeft}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};
