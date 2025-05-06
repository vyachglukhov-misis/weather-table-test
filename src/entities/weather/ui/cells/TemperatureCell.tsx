import React from "react";

interface Props {
  temperatureValue: number;
}

export const TemperatureCell = ({ temperatureValue }: Props) => {
  return <div>{temperatureValue}</div>;
};
