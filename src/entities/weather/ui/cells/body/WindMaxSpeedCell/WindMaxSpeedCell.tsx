import React from "react";

import styles from "./index.module.scss";
import { getTemperatureValueColor } from "../../../../utils/getWindSpeedValueColor";

interface Props {
  windValue: number;
}

export const WindMaxSpeedCell = ({ windValue }: Props) => {
  const windValueColor = getTemperatureValueColor(windValue);
  return (
    <div className={styles.wind} style={{ backgroundColor: windValueColor }}>
      {windValue}
    </div>
  );
};
