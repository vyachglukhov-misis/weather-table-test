export enum WeatherIconName {
  ClearDay = "clear-day",
  ClearNight = "clear-night",
  Cloudy = "cloudy",
  Rain = "rain",
  SnowAndRain = "snow-and-rain",
  Snow = "snow",
  Thunder = "thunder",
  DayPartlyCloudy = "day-partly-cloudy",
  NightPartlyCloudy = "night-partly-cloudy",
}

export type WeatherIcon = `${WeatherIconName}`;
