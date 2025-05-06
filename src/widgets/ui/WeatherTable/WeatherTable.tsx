import React, { useCallback, useState } from "react";
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
} from "../../../entities/weather/ui/cells";
import { WeatherIconName } from "../../../entities/weather/model/weather-icon";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DraggableTableColumn } from "../../../shared/ui/draggable-table-column.tsx/draggable-table-column";

import "./index.scss";
import { TimeAtClockHeaderCell } from "../../../entities/weather/ui/cells/header/TimeAtClockHeaderCell/TimeAtClockHeaderCell";
import { RainValueHeaderCell } from "../../../entities/weather/ui/cells/header/RainValueHeaderCell/RainValueHeaderCell";
import { TemperatureHeaderCell } from "../../../entities/weather/ui/cells/header/TemperatureHeaderCell/TemperatureHeaderCell";
import { WindSpeedHeaderCell } from "../../../entities/weather/ui/cells/header/WindSpeedHeaderCell/WindSpeedHeaderCell";
import { WindMaxSpeedHeaderCell } from "../../../entities/weather/ui/cells/header/WindMaxSpeedHeaderCell/WindMaxSpeedHeaderCell";
import { WindDirectionHeaderCell } from "../../../entities/weather/ui/cells/header/WindDirectionHeaderCell/WindDirectionHeaderCell";
import { PressureHeaderCell } from "../../../entities/weather/ui/cells/header/PressureHeaderCell/PressureHeaderCell";
import { WeatherIconCell } from "../../../entities/weather/ui/cells/body/WeatherIconCell/WeatherIconCell";

type Props = {
  data: WeatherTableRow[];
};

export const WeatherTable = ({ data }: Props) => {
  const [columns, setColumns] = useState<ColumnsType<WeatherTableRow>>([
    {
      title: <TimeAtClockHeaderCell />,
      dataIndex: "timeAtClock",
      key: "timeAtClock",
      render: (date: Date) => <TimeAtClockCell date={date} />,
      width: "max-content",
    },
    {
      title: <RainValueHeaderCell />,
      dataIndex: "precipationValue",
      key: "precipationValue",
      render: (mm: number) => <RainValueCell rainValue={mm} />,
      width: "max-content",
    },
    {
      title: "",
      dataIndex: "weatherIcon",
      key: "weatherIcon",
      render: (icon: WeatherIconName) => <WeatherIconCell weatherName={icon} />,
      width: "max-content",
    },
    {
      title: <TemperatureHeaderCell />,
      dataIndex: "temperature",
      key: "temperature",
      render: (temp: number) => <TemperatureCell temperatureValue={temp} />,
      width: "max-content",
    },
    {
      title: <WindSpeedHeaderCell />,
      dataIndex: "windSpeedValue",
      key: "windSpeedValue",
      render: (speed: number) => <WindSpeedCell windValue={speed} />,
      width: "max-content",
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
    <DndProvider backend={HTML5Backend}>
      <Table<WeatherTableRow>
        style={{ tableLayout: "fixed" }}
        columns={colsWithIndex}
        dataSource={data}
        components={components}
        pagination={false}
      />
    </DndProvider>
  );
};
