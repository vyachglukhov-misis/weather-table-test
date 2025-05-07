import { ReactComponent as ArrowIcon } from "../../../assets/icons/windDirections/north-arrow.svg";
import React from "react";

interface Props {
  windDegree: number;
}

export const WindDirectionArrowCell = ({ windDegree }: Props) => {
  return (
    <ArrowIcon
      style={{
        transform: `rotate(${windDegree}deg)`,
        transition: "transform 0.3s ease",
      }}
    />
  );
};
