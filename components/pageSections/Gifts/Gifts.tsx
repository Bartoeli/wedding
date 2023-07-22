import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import { H2 } from "@/components/atoms/H2/H2";
import accomRight from "../../../assets/flowers/accomRight.png";
import styles from "./Gifts.module.scss";

export const Gifts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="gifts">
      <H2 text="gifts_header" />
      <div>
        <p>{t("gifts_info")}</p>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image
            alt="flower"
            src={accomRight}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};
