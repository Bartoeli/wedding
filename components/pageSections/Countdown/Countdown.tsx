import { Timer } from "@/components/atoms/Timer/Timer";
import Image from "next/image";
import React from "react";
import { Syne } from "next/font/google";

import window from "../../../assets/images/window.png";
import styles from "./Countdown.module.scss";

const syne = Syne({ subsets: ["latin"], display: "swap", weight: "700" });

export const Countdown: React.FC = () => {
  return (
    <section id="countdown" className={syne.className}>
      <div className={styles.countdownContainer}>
        <div className={styles.countdownImageContainer}>
          <Image
            alt="factory window"
            src={window}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.timerContainer}>
          <Timer />
        </div>
      </div>
    </section>
  );
};
