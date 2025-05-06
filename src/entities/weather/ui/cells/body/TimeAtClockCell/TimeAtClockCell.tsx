import { getFormattedTimeFromDate } from "../../../../utils/getFormattedTimeFromDate";
import React from "react";
import styles from "./index.module.scss";

interface Props {
  date: Date;
}

export const TimeAtClockCell = ({ date }: Props) => {
  const formattedTime = getFormattedTimeFromDate(date);
  return <div className={styles.time}>{formattedTime}</div>;
};
