import { H2 } from "@/components/atoms/H2/H2";
import Image from "next/image";
import React from "react";
import whenWhereFlower from "../../../assets/flowers/whenWhereRight.png";
import styles from "./WhenWhere.module.scss";

export const WhenWhere: React.FC = () => {
  return (
    <section id="when-where">
      <div className={styles.whenWhereContainer}>
        <div className={styles.when}>
          <H2 text="headline_when" />
          <p className={styles.p}>5/8/2023</p>
          <p className={styles.p}>12:00</p>
        </div>
        <div className={styles.where}>
          <H2 text="headline_where" />
          <p className={styles.p}>Fabrika 1861</p>
          <p className={styles.p}>Bavlnářská 137</p>
          <p className={styles.p}>513 01 Semily</p>
        </div>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image
            alt="flower"
            src={whenWhereFlower}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};
