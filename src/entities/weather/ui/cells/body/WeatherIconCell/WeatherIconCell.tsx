import React from "react";
import { WeatherIconName } from "../../../../model/weather-icon";
import { weatherNameToSvgIconMapper } from "../../../../model/mappers/weatherNameToSvgIconMapper";
import styles from "./index.module.scss";
interface Props {
  weatherName: WeatherIconName;
}

export const WeatherIconCell = ({ weatherName }: Props) => {
  const WeatherIconComponent = weatherNameToSvgIconMapper[weatherName];

  return WeatherIconComponent ? (
    <WeatherIconComponent className={styles.weather} />
  ) : null;
};
