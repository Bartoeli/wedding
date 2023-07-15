import { syne } from "@/styles/fonts";
import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./H2.module.scss";

export const H2: React.FC<{ text: string }> = ({ text }) => {
  const { t } = useTranslation();

  return (
    <h2 className={`${syne.className} ${styles.header2}`}>
      {t(text).toUpperCase()}
    </h2>
  );
};
