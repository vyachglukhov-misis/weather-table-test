import { getTemperatureValueColor } from "../../utils/getWindSpeedValueColor";
import React from "react";

interface Props {
  windValue: number;
}

export const WindMaxSpeedCell = ({ windValue }: Props) => {
  const windValueColor = getTemperatureValueColor(windValue);
  return <div style={{ backgroundColor: windValueColor }}>{windValue}</div>;
};
