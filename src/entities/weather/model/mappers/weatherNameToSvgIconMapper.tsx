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
import { SVGProps } from "react";

type WeatherIconComponent = React.FC<SVGProps<SVGSVGElement>>;

export const weatherNameToSvgIconMapper: Record<
  WeatherIconName,
  WeatherIconComponent
> = {
  [WeatherIconName.ClearDay]: (props) => <ClearDay {...props} />,
  [WeatherIconName.Rain]: (props) => <RainDay {...props} />,
  [WeatherIconName.ClearNight]: (props) => <ClearNight {...props} />,
  [WeatherIconName.Cloudy]: (props) => <Cloudy {...props} />,
  [WeatherIconName.DayPartlyCloudy]: (props) => <DayPartlyCloudy {...props} />,
  [WeatherIconName.NightPartlyCloudy]: (props) => (
    <NightPartlyCloudy {...props} />
  ),
  [WeatherIconName.SnowAndRain]: (props) => <SnowAndRain {...props} />,
  [WeatherIconName.Snow]: (props) => <Snow {...props} />,
  [WeatherIconName.Thunder]: (props) => <Thunder {...props} />,
};
