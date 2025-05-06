import { WeatherIcon } from "./weather-icon";

export type WeatherTableRow = {
  timeAtClock: Date;
  weatherIcon: WeatherIcon;
  precipationValue: number;
  temperature: number;
  windSpeedValue: number;
  maxWindSpeedValue: number;
  windDirection: number;
  pressionValue: number;
};
