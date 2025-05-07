import { useEffect, useState } from "react";
import { TWeatherRequest } from "../../../api/weather/weather.repository";
import {
  WeatherService,
  WeatherTableInfo,
} from "../../../api/weather/weather.service";

export function useFetchWeatherHook(
  request: TWeatherRequest,
  weatherService: WeatherService
) {
  const [data, setData] = useState<WeatherTableInfo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean | null>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const weatherTablesInfo: WeatherTableInfo[] | undefined =
          await weatherService.getWeatherInfo(request);
        if (!weatherTablesInfo) {
          throw new Error("No content");
        }
        setData(weatherTablesInfo);
      } catch (e: any) {
        setError(e.message || "Ошибка в получении таблиц о погоде");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [JSON.stringify(request), weatherService]);

  return { data, error, loading };
}
