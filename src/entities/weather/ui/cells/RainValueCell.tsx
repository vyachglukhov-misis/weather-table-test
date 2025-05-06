import React from "react";

interface Props {
  rainValue: number;
}

export const RainValueCell = ({ rainValue }: Props) => {
  return <div>{rainValue}</div>;
};
