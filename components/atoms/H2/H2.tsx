import { syne } from "@/styles/fonts";
import React, { CSSProperties } from "react";
import { useTranslation } from "react-i18next";

import styles from "./H2.module.scss";

export const H2: React.FC<{ text: string; myStyle?: CSSProperties }> = ({
  text,
  myStyle,
}) => {
  const { t } = useTranslation();

  return (
    <h2 className={`${syne.className} ${styles.header2}`} style={myStyle}>
      {t(text).toUpperCase()}
    </h2>
  );
};
