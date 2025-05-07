export enum WeatherIconName {
  ClearDay = "clear",
  ClearNight = "twilight",
  Cloudy = "cloudy",
  Rain = "rain",
  SnowAndRain = "snow-and-rain",
  Snow = "snow",
  Thunder = "thunder",
  DayPartlyCloudy = "clTwilight",
  NightPartlyCloudy = "night-partly-cloudy",
}

export type WeatherIcon = `${WeatherIconName}`;
