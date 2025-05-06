import React from "react";
import styles from "./index.module.scss";

interface Props {
  rainValue: number;
}

export const RainValueCell = ({ rainValue }: Props) => {
  return <div className={styles.rain}>{rainValue}</div>;
};
