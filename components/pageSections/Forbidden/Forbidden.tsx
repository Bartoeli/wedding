import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import { H2 } from "@/components/atoms/H2/H2";
import accomRight from "../../../assets/flowers/accomRight.png";
import styles from "./Forbidden.module.scss";

export const Forbidden: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="forbidden" className={styles.forbidden}>
      <H2 text="forbidden_header" />
      <div>
        <p>{t("forbidden_info")}</p>
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