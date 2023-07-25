import Image, { StaticImageData } from "next/image";
import React from "react";

import styles from "./Flower.module.scss";

type flowerProps = {
  left: boolean;
  source: string | StaticImageData;
};

export const Flower: React.FC<flowerProps> = ({ left, source }) => {
  return (
    <div className={styles.flowerSection}>
      <div
        className={
          left ? styles.leftFlowerContainer : styles.rightFlowerContainer
        }
      >
        <Image
          alt="flower"
          src={source}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};
