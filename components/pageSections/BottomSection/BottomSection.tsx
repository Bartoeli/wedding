import Image from "next/image";
import React from "react";

import styles from "./BottomSection.module.scss";
import factory from "../../../assets/images/factory.png";
import bottomLeft from "../../../assets/flowers/bottomLeft.png";
import bottomRight from "../../../assets/flowers/bottomRight.png";

export const BottomSection: React.FC = () => {
  return (
    <section id="bottomSection">
      <div className={styles.imageSection}>
        <div className={styles.bottomLeftContainer}>
          <Image
            alt="flower"
            src={bottomLeft}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.bottomRightContainer}>
          <Image
            alt="flower"
            src={bottomRight}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
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
