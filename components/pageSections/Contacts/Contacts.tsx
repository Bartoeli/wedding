import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import { H2 } from "@/components/atoms/H2/H2";
// import styles from "./Contacts.module.scss";

export const Contacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contacts">
      <H2 text="contacts_header" />
      <div>
        <p>{t("contacts_info")}</p>
      </div>
    </section>
  );
};
