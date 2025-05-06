import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import { WeatherTableRow } from "../../../entities/weather/model/WeatherTableRow";
import {
  PressureValueCell,
  RainValueCell,
  TemperatureCell,
  TimeAtClockCell,
  WeatherIconCell,
  WindDirectionArrowCell,
  WindMaxSpeedCell,
  WindSpeedCell,
} from "../../../entities/weather/ui/cells";
import { WeatherIconName } from "../../../entities/weather/model/weather-icon";

// import { TimeCell } from "./cells/TimeCell";
// import { IconCell } from "./cells/IconCell";
// import { PrecipitationCell } from "./cells/PrecipitationCell";
// import { TemperatureCell } from "./cells/TemperatureCell";
// import { WindSpeedCell } from "./cells/WindSpeedCell";
// import { WindGustCell } from "./cells/WindGustCell";
// import { WindDirectionCell } from "./cells/WindDirectionCell";
// import { PressureCell } from "./cells/PressureCell";

type Props = {
  data: WeatherTableRow[];
};

export const WeatherTable: React.FC<Props> = ({ data }) => {
  const columns: ColumnsType<WeatherTableRow> = [
    {
      title: "Часы",
      dataIndex: "timeAtClock",
      key: "timeAtClock",
      render: (date: Date) => <TimeAtClockCell date={date} />,
    },
    {
      title: "MM",
      dataIndex: "precipationValue",
      key: "precipationValue",
      render: (mm: number) => <RainValueCell rainValue={mm} />,
    },
    {
      title: "weatherIcon",
      dataIndex: "weatherIcon",
      key: "weatherIcon",
      render: (icon: WeatherIconName) => <WeatherIconCell weatherName={icon} />,
    },
    {
      title: "°C",
      dataIndex: "temperature",
      key: "temperature",
      render: (temp: number) => <TemperatureCell temperatureValue={temp} />,
    },
    {
      title: "м/с",
      dataIndex: "windSpeedValue",
      key: "windSpeedValue",
      render: (speed: number) => <WindSpeedCell windValue={speed} />,
    },
    {
      title: "пор. м/с",
      dataIndex: "maxWindSpeedValue",
      key: "maxWindSpeedValue",
      render: (value: number) => <WindMaxSpeedCell windValue={value} />,
    },
    {
      title: "напр.",
      dataIndex: "windDirection",
      key: "windDirection",
      render: (deg: number) => <WindDirectionArrowCell windDegree={deg} />,
    },
    {
      title: "мм.рт. ст.",
      dataIndex: "pressionValue",
      key: "pressionValue",
      render: (pressure: number) => (
        <PressureValueCell pressureValue={pressure} />
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      rowKey={(record) => record.timeAtClock.getTime()}
      size="middle"
      bordered
    />
  );
};
