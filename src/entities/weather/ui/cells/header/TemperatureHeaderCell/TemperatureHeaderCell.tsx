import { TemperatureHeaderIcon } from "../../../../assets/icons/headerIcons";
import styles from "./index.module.scss";

export const TemperatureHeaderCell = () => {
  return (
    <div className={styles.temperature}>
      <TemperatureHeaderIcon />
      <span>℃</span>
    </div>
  );
};
