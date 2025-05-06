import { weatherNameToSvgIconMapper } from "../../model/mappers/weatherNameToSvgIconMapper";
import { WeatherIconName } from "../../model/weather-icon";
import React from "react";

interface Props {
  weatherName: WeatherIconName;
}

export const WeatherIconCell = ({ weatherName }: Props) => {
  const WeatherIconComponent = weatherNameToSvgIconMapper[weatherName];

  return WeatherIconComponent ? <WeatherIconComponent /> : null;
};
