import * as React from "react";
import { useTranslation } from "next-i18next";

export const Translations = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("hello_msg")}</p>
    </div>
  );
};
