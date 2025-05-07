import React from "react";
import "./App.css";
import { WeatherTable } from "./widgets/ui/WeatherTable/WeatherTable";
import { WeatherTableRow } from "./entities/weather/model/WeatherTableRow";
import { WeatherIconName } from "./entities/weather/model/weather-icon";
import { useFetchWeatherHook } from "./features/weather/hooks/useFetchWeatherHook";
import { WeatherService } from "./api/weather/weather.service";
import {
  SURFACE_LEVEL,
  WeatherModel,
  WeatherParam,
} from "./api/weather/weather.repository";

const data: WeatherTableRow[] = [
  {
    weatherIcon: WeatherIconName.ClearNight,
    timeAtClock: new Date(),
    temperature: 36.6,
    windSpeedValue: 3,
    maxWindSpeedValue: 20,
    windDirection: 90,
    precipationValue: 3,
    pressionValue: 750,
  },
  {
    weatherIcon: WeatherIconName.ClearDay,
    timeAtClock: new Date(),
    temperature: 36.6,
    windSpeedValue: 10,
    maxWindSpeedValue: 11,
    windDirection: 135,
    precipationValue: 3,
    pressionValue: 750,
  },
  {
    weatherIcon: WeatherIconName.ClearNight,
    timeAtClock: new Date(),
    temperature: 36.6,
    windSpeedValue: 3,
    maxWindSpeedValue: 6,
    windDirection: 180,
    precipationValue: 3,
    pressionValue: 750,
  },
];

function App() {
  const weatherService = new WeatherService();
  const weatherRequest = {
    cord: [37.6173, 55.7558],
    level: ["100m"] as SURFACE_LEVEL[],
    param: [
      "wind",
      "temp",
      "cloud",
      "pressure",
      "gust",
      "prec",
    ] as WeatherParam[],
    day: 14,
    step: 3,
    model: "gfs" as WeatherModel,
  };
  const { data, error, loading } = useFetchWeatherHook(
    weatherRequest,
    weatherService
  );
  return (
    <div className="App">
      <WeatherTable data={data} />
    </div>
  );
}

export default App;
