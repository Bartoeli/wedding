import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import { H2 } from "@/components/atoms/H2/H2";
import scheduleLeft from "../../../assets/flowers/scheduleLeft.png";
import styles from "./Parking.module.scss";

export const Parking: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="parking" className={styles.parking}>
      <H2 text="parking_header" />
      <div>
        <p>{t("parking_info")}</p>
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
