import { H2 } from "@/components/atoms/H2/H2";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
import { useGetData } from "@/utils/useGetData";

import partyFlag from "../../../assets/icons/partyFlag.png";
import rings from "../../../assets/icons/rings.png";
import camera from "../../../assets/icons/camera.png";
import cutlery from "../../../assets/icons/cutlery.png";
import cake from "../../../assets/icons/cake.png";
import cheers from "../../../assets/icons/cheers.png";
import styles from "./Schedule.module.scss";
import scheduleLeft from "../../../assets/flowers/scheduleLeft.png";

export interface IScheduledItem {
  time: string;
  icon: StaticImageData;
  label: string;
}

export interface IUnscheduledItem {
  icon: StaticImageData;
  label: string;
}

const SCHEDULED_ITEMS: IScheduledItem[] = [
  { time: "12:00", icon: partyFlag, label: "schedule_item_start" },
  { time: "13:00", icon: rings, label: "schedule_item_ceremony" },
  { time: "13:50", icon: camera, label: "schedule_item_photoshoot" },
  { time: "14:00", icon: cutlery, label: "schedule_item_lunch" },
];

const UNSCHEDULED_ITEMS: IUnscheduledItem[] = [
  { icon: cake, label: "schedule_item_cake" },
  { icon: camera, label: "schedule_item_photo_booth" },
  { icon: camera, label: "schedule_item_first_dance" },
  { icon: cheers, label: "schedule_item_party" },
];

const ScheduledItem: React.FC<{ data: IScheduledItem; key: number }> = ({
  data,
  key,
}) => {
  const { t } = useTranslation();

  return (
    <div id={`${key}`} className={styles.itemContainer}>
      <div className={styles.labelContainer}>
        <p className={styles.p}>{data.time}</p>
      </div>
      <div className={styles.iconContainer}>
        <Image
          src={data.icon}
          alt={data.label}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.labelContainer}>
        <p className={styles.p}>{t(data.label)}</p>
      </div>
    </div>
  );
};

const UnscheduledItem: React.FC<{ data: IUnscheduledItem; key: number }> = ({
  data,
  key,
}) => {
  const { t } = useTranslation();

  return (
    <div id={`${key}`} className={styles.unscheduledItemContainer}>
      <div className={styles.iconContainer}>
        <Image
          src={data.icon}
          alt={data.label}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.labelContainer}>
        <p className={styles.p}>{t(data.label)}</p>
      </div>
    </div>
  );
};

export const Schedule: React.FC = () => {
  const { t } = useTranslation();
  const user = useGetData();
  const alone = user?.alone;

  return (
    <section id="schedule">
      <H2 text="schedule_header" />
      <div className={styles.scheduledItemsContainer}>
        {SCHEDULED_ITEMS.map((item, index) => (
          <ScheduledItem data={item} key={index} />
        ))}
      </div>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image
            alt="flower"
            src={scheduleLeft}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <p>
        {alone
          ? t("schedule_more_items_title_single")
          : t("schedule_more_items_title")}
      </p>
      <div className={styles.unscheduledItemsContainer}>
        {UNSCHEDULED_ITEMS.map((item, index) => (
          <UnscheduledItem data={item} key={index} />
        ))}
      </div>
    </section>
  );
};
