import React from "react";

interface Props {
  pressureValue: number;
}

export const PressureValueCell = ({ pressureValue }: Props) => {
  return <div>{pressureValue}</div>;
};
