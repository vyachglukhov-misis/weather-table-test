import React, { useCallback, useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import { WeatherTableRow } from "../../../entities/weather/model/WeatherTableRow";
import {
  PressureValueCell,
  RainValueCell,
  TemperatureCell,
  TimeAtClockCell,
  WindDirectionArrowCell,
  WindMaxSpeedCell,
  WindSpeedCell,
} from "../../../entities/weather/ui/cells/body";
import { WeatherIconName } from "../../../entities/weather/model/weather-icon";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DraggableTableColumn } from "../../../shared/ui/draggable-table-column.tsx/draggable-table-column";

import "./index.scss";
import { TWeatherRequest } from "../../../api/weather/weather.repository";
import {
  PressureHeaderCell,
  RainValueHeaderCell,
  TemperatureHeaderCell,
  TimeAtClockHeaderCell,
  WindDirectionHeaderCell,
  WindMaxSpeedHeaderCell,
  WindSpeedHeaderCell,
} from "../../../entities/weather/ui/cells/header";
import { WeatherIconCell } from "../../../entities/weather/ui/cells/body/WeatherIconCell/WeatherIconCell";
import {
  WeatherService,
  WeatherTableInfo,
} from "../../../api/weather/weather.service";

type Props = {
  data: WeatherTableInfo[];
};

export const WeatherTable = ({ data }: Props) => {
  const [columns, setColumns] = useState<ColumnsType<WeatherTableRow>>([
    {
      title: <TimeAtClockHeaderCell />,
      dataIndex: "timeAtClock",
      key: "timeAtClock",
      render: (date: Date) => <TimeAtClockCell date={date} />,
    },
    {
      title: <RainValueHeaderCell />,
      dataIndex: "precipationValue",
      key: "precipationValue",
      render: (mm: number) => <RainValueCell rainValue={mm} />,
    },
    {
      title: "",
      dataIndex: "weatherIcon",
      key: "weatherIcon",
      render: (icon: WeatherIconName) => <WeatherIconCell weatherName={icon} />,
    },
    {
      title: <TemperatureHeaderCell />,
      dataIndex: "temperature",
      key: "temperature",
      render: (temp: number) => <TemperatureCell temperatureValue={temp} />,
    },
    {
      title: <WindSpeedHeaderCell />,
      dataIndex: "windSpeedValue",
      key: "windSpeedValue",
      render: (speed: number) => <WindSpeedCell windValue={speed} />,
    },
    {
      title: <WindMaxSpeedHeaderCell />,
      dataIndex: "maxWindSpeedValue",
      key: "maxWindSpeedValue",
      render: (value: number) => <WindMaxSpeedCell windValue={value} />,
    },
    {
      title: <WindDirectionHeaderCell />,
      dataIndex: "windDirection",
      key: "windDirection",
      render: (deg: number) => <WindDirectionArrowCell windDegree={deg} />,
    },
    {
      title: <PressureHeaderCell />,
      dataIndex: "pressionValue",
      key: "pressionValue",
      render: (pressure: number) => (
        <PressureValueCell pressureValue={pressure} />
      ),
    },
  ]);

  const moveColumn = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const newCols = [...columns];
      const [dragged] = newCols.splice(dragIndex, 1);
      newCols.splice(hoverIndex, 0, dragged);
      setColumns(newCols);
    },
    [columns]
  );

  const components = {
    header: {
      cell: (props: any) => (
        <DraggableTableColumn {...props} moveColumn={moveColumn} />
      ),
    },
  };

  const colsWithIndex = columns.map((col, index) => ({
    ...col,
    onHeaderCell: (): React.HTMLAttributes<HTMLElement> & {
      index: number;
    } => ({
      index,
    }),
  }));

  return (
    <>
      {data.map((table) => (
        <DndProvider backend={HTML5Backend}>
          <Table<WeatherTableRow>
            style={{ tableLayout: "fixed" }}
            columns={colsWithIndex}
            dataSource={table.tableData}
            components={components}
            pagination={false}
          />
        </DndProvider>
      ))}
    </>
  );
};
