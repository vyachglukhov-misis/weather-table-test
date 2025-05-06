import { getFormattedTimeFromDate } from "../../utils/getFormattedTimeFromDate";
import React from "react";

interface Props {
  date: Date;
}

export const TimeAtClockCell = ({ date }: Props) => {
  const formattedTime = getFormattedTimeFromDate(date);
  return <div>{formattedTime}</div>;
};
