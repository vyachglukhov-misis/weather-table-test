import React from "react";
import "./App.css";
import { WeatherTable } from "./widgets/ui/WeatherTable/WeatherTable";
import { WeatherTableRow } from "./entities/weather/model/WeatherTableRow";
import { WeatherIconName } from "./entities/weather/model/weather-icon";

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
  return (
    <div className="App">
      <WeatherTable data={data} />
    </div>
  );
}

export default App;
