import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import { H2 } from "@/components/atoms/H2/H2";
import styles from "./Contacts.module.scss";
import { SectionWrapper } from "@/components/atoms/SectionWrapper/SectionWrapper";
import liana from "../../../assets/images/liana.png";

export const Contacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contacts">
      <SectionWrapper>
        <H2 text="contacts_header" />
        <div className={styles.infoContainer}>
          <p>{t("contacts_info")}</p>
        </div>
        <div className={styles.photoContainer}>
          <Image
            alt="wedding coordinator"
            src={liana}
            width={250}
            height={250}
            style={{ objectFit: "contain" }}
          />
          <div className={styles.phoneContainer}>
            <a href="tel:+420608425066" className={styles.phoneNumber}>
              +420 608 425 066
            </a>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};
