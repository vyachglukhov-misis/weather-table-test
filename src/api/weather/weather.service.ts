import { WeatherIcon } from "../../entities/weather/model/weather-icon";
import { WeatherTableRow } from "../../entities/weather/model/WeatherTableRow";
import {
  SURFACE_LEVEL,
  TWeatherRequest,
  TWeatherResponse,
  WeatherModel,
  WeatherRepository,
} from "./weather.repository";

type WeatherTableInfo = {
  date: Date;
  model: WeatherModel;
  sunrise: Date;
  sunset: Date;
  tableData: WeatherTableRow[];
};

export class WeatherService {
  private readonly weatherRepository: WeatherRepository;

  constructor() {
    this.weatherRepository = new WeatherRepository();
  }

  async getWeatherInfo(body: TWeatherRequest) {
    try {
      const data = await this.weatherRepository.fetchWeatherInfo(body);

      if (!data) {
        throw new Error("No content in weather response");
      }
      const preparedWeatherData = this.prepareWeatherData(data);
      console.log(preparedWeatherData);
      return preparedWeatherData;
    } catch (e) {
      console.error(e);
    }
  }

  private prepareWeatherData(data: TWeatherResponse[]) {
    const weatherTableInfos: WeatherTableInfo[] = [];

    for (let i = 0; i < data.length; i++) {
      const tableData: WeatherTableRow[] = [];

      const currentDayWeather = data[i];
      const date = new Date(Date.parse(currentDayWeather.date));
      const model = currentDayWeather.model;
      const level = Object.keys(currentDayWeather.levels)[0] as SURFACE_LEVEL;
      const sunrise = new Date(Date.parse(currentDayWeather.sunrise));
      const sunset = new Date(Date.parse(currentDayWeather.sunset));

      const clocks = currentDayWeather.time.reduce<Date[]>((acc, curr) => {
        acc.push(new Date(Date.parse(curr)));
        return acc;
      }, []);

      const icons = currentDayWeather.levels[level].icon!.reduce<WeatherIcon[]>(
        (acc, curr) => {
          acc.push(curr);
          return acc;
        },
        []
      );
      const precipationValues = currentDayWeather.levels[level].prec!.reduce<
        number[]
      >((acc, curr) => {
        acc.push(curr);
        return acc;
      }, []);
      const temperatures = currentDayWeather.levels[level].temp!.reduce<
        number[]
      >((acc, curr) => {
        acc.push(curr);
        return acc;
      }, []);
      const windSpeedValues = currentDayWeather.levels[level].windSpeed!.reduce<
        number[]
      >((acc, curr) => {
        acc.push(curr);
        return acc;
      }, []);
      const windDirections = currentDayWeather.levels[
        level
      ].windDirection!.reduce<number[]>((acc, curr) => {
        acc.push(curr);
        return acc;
      }, []);
      const windMaxSpeedValues = currentDayWeather.levels[level].gust!.reduce<
        number[]
      >((acc, curr) => {
        acc.push(curr);
        return acc;
      }, []);
      const pressures = currentDayWeather.levels[level].pressure!.reduce<
        number[]
      >((acc, curr) => {
        acc.push(curr);
        return acc;
      }, []);

      for (let j = 0; j < clocks.length; j++) {
        tableData.push({
          timeAtClock: clocks[j],
          weatherIcon: icons[j],
          precipationValue: precipationValues[j],
          windSpeedValue: windSpeedValues[j],
          windDirection: windDirections[j],
          maxWindSpeedValue: windMaxSpeedValues[j],
          temperature: temperatures[j],
          pressionValue: pressures[j],
        });
      }
      weatherTableInfos.push({
        date: date,
        model: model,
        sunrise: sunrise,
        sunset: sunset,
        tableData: tableData,
      });
    }
    return weatherTableInfos;
  }
}
