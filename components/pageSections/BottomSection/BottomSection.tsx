import Image from "next/image";
import React from "react";

import styles from "./BottomSection.module.scss";
import factory from "../../../assets/images/factory.png";

export const BottomSection: React.FC = () => {
  return (
    <section id="bottomSection">
      <div className={styles.imageSection}>
        <div className={styles.factoryContainer}>
          <Image
            alt="factory"
            src={factory}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};
