import React, { ReactNode } from "react";

import styles from "./SectionWrapper.module.scss";

export const SectionWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className={styles.sectionWrapper}>{children}</div>;
};
