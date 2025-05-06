import { ClockHeaderIcon } from "../../../../assets/icons/headerIcons";
import styles from "./index.module.scss";

export const TimeAtClockHeaderCell = () => {
  return (
    <div className={styles.clock}>
      <ClockHeaderIcon className={styles.icon} />
      <span className={styles.title}>часы</span>
    </div>
  );
};
