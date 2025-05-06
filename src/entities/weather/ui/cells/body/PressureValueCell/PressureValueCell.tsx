import styles from "./index.module.scss";
import React from "react";

interface Props {
  pressureValue: number;
}

export const PressureValueCell = ({ pressureValue }: Props) => {
  return <div className={styles.pressure}>{pressureValue}</div>;
};
