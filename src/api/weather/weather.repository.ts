import { WeatherIconName } from "../../entities/weather/model/weather-icon";

export type SURFACE_LEVEL =
  | "surface"
  | "100m"
  | "150m"
  | "200m"
  | "250m"
  | "300m"
  | "350m"
  | "400m"
  | "450m"
  | "500m";

export type WeatherParam =
  | "wind"
  | "temp"
  | "cloud"
  | "pressure"
  | "gust"
  | "prec";

export type WeatherModel = "gfs";

export type TWeatherRequest = {
  cord: number[];
  level: Array<SURFACE_LEVEL>;
  param?: Array<WeatherParam>;
  day?: number;
  step?: number;
  model?: WeatherModel;
};
export type TWeatherResponse = {
  date: string;
  sunrise: string;
  sunset: string;
  time: string[];
  model: WeatherModel;
  levels: {
    [K in SURFACE_LEVEL]: LevelData;
  };
};

type LevelData = {
  windDirection?: number[];
  windSpeed?: number[];
  temp?: number[];
  cloud?: number[];
  pressure?: number[];
  gust?: number[];
  prec?: number[];
  icon?: WeatherIconType[];
};

export type WeatherIconNameApi = {
  ClearDay: "clear";
  ClearNight: "twilight";
  Cloudy: "cloudy";
  Rain: "rain";
  SnowAndRain: "snow-and-rain";
  Snow: "snow";
  Thunder: "thunder";
  DayPartlyCloudy: "clTwilight";
  NightPartlyCloudy: "night-partly-cloudy";
};

type WeatherIconType = WeatherIconNameApi[keyof WeatherIconNameApi];

export class WeatherRepository {
  private readonly url = "http://localhost:3001/weather";

  async fetchWeatherInfo(
    body: TWeatherRequest
  ): Promise<TWeatherResponse[] | null> {
    try {
      const response = await fetch(this.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        console.error("Server returned error:", response.statusText);
        return null;
      }
      const data = await response.json();
      return data.message as TWeatherResponse[];
    } catch (e) {
      console.error("Fetch failed:", e);
      return null;
    }
  }
}
