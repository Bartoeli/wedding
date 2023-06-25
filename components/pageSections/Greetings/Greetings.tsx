import { useGetData } from "@/utils/useGetData";
import { t } from "i18next";
import React from "react";

export const Greetings: React.FC = () => {
  const data = useGetData();

  return (
    <section id="greetings">
      <div>{t("greetings_paragraph", { salutation: data.salutation })}</div>
    </section>
  );
};
