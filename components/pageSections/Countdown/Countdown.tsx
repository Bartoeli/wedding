import { Timer } from "@/components/atoms/Timer/Timer";
import { syne } from "@/styles/fonts";
import Image from "next/image";
import React from "react";

import window from "../../../assets/images/window.png";
import windows from "../../../assets/images/3windows.png";
import moreWindows from "../../../assets/images/5windows.png";
import styles from "./Countdown.module.scss";
import scroll from "../../../assets/icons/scroll.gif";

export const Countdown: React.FC = () => {
  return (
    <section id="countdown" className={syne.className}>
      <div className={styles.countdown}>
        <div className={styles.countdownContainer}>
          <div className={styles.oneWindowContainer}>
            <Image
              alt="factory window"
              src={window}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.threeWindowsContainer}>
            <Image
              alt="factory windows"
              src={windows}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.fiveWindowsContainer}>
            <Image
              alt="factory windows"
              src={moreWindows}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.timerContainer}>
            <Timer />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <a className={styles.button} href="#header">
            <Image src={scroll} alt="scroll down" width={40} height={40} />
          </a>
        </div>
      </div>
    </section>
  );
};
