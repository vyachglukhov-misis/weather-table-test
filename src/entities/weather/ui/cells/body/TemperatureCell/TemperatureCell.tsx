import React from "react";
import styles from "./index.module.scss";

interface Props {
  temperatureValue: number;
}

const CELSIUM_MARK = "°";

export const TemperatureCell = ({ temperatureValue }: Props) => {
  const valueWithMeasure = temperatureValue + CELSIUM_MARK;
  return <div className={styles.temperature}>{valueWithMeasure}</div>;
};
