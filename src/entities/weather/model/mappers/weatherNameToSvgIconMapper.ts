import {
  ClearDay,
  ClearNight,
  Cloudy,
  DayPartlyCloudy,
  NightPartlyCloudy,
  RainDay,
  Snow,
  SnowAndRain,
  Thunder,
} from "../../assets/icons/weatherIcons";
import { WeatherIconName } from "../weather-icon";

export const weatherNameToSvgIconMapper = {
  [WeatherIconName.ClearDay]: ClearDay,
  [WeatherIconName.Rain]: RainDay,
  [WeatherIconName.ClearNight]: ClearNight,
  [WeatherIconName.Cloudy]: Cloudy,
  [WeatherIconName.DayPartlyCloudy]: DayPartlyCloudy,
  [WeatherIconName.NightPartlyCloudy]: NightPartlyCloudy,
  [WeatherIconName.SnowAndRain]: SnowAndRain,
  [WeatherIconName.Snow]: Snow,
  [WeatherIconName.Thunder]: Thunder,
};
