import Image from "next/image";
import React from "react";

import styles from "./Header.module.scss";
import logo from "../../../assets/images/mainLogo.png";
import leftFlower from "../../../assets/flowers/headerLeft.png";
import rightFlower from "../../../assets/flowers/headerRight.png";

export interface IHeader {}

export const Header: React.FC<IHeader> = () => {
  return (
    <section id="header">
      <div className={styles.headerContainer}>
        <div className={styles.headerMainImageContainer}>
          <Image
            alt="wedding logo"
            src={logo}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className={styles.datePlace}>5/08/2023</p>
        <p className={styles.datePlace}>Fabrika 1861</p>

        <div className={styles.flowersContainer}>
          <div className={styles.flower}>
            <Image
              alt="flower"
              src={leftFlower}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.flower}>
            <Image
              alt="flower"
              src={rightFlower}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
