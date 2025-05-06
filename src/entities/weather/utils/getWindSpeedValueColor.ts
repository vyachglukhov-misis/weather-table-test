export const getTemperatureValueColor = (value: number) => {
  if (value >= 32.7) return "rgb(54, 11, 59)";
  if (value >= 28.5) return "rgb(109, 15, 119)";
  if (value >= 24.5) return "rgb(138, 19, 151)";
  if (value >= 20.8) return "rgb(152, 51, 124)";
  if (value >= 17.2) return "rgb(183, 0, 2)";
  if (value >= 13.9) return "rgb(207, 19, 21)";
  if (value >= 10.8) return "rgb(207, 71, 18)";
  if (value >= 8) return "rgb(227, 108, 12)";
  if (value >= 5.5) return "rgb(255, 150, 2)";
  if (value >= 3.4) return "rgb(252, 193, 5)";
  if (value >= 1.6) return "rgb(138, 226, 140)";
  if (value >= 0.3) return "rgb(188, 234, 183)";
  return "rgb(231, 252, 229)";
};
