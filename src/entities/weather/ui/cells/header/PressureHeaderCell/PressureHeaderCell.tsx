import { PressureHeaderIcon } from "../../../../assets/icons/headerIcons";
import styles from "./index.module.scss";

export const PressureHeaderCell = () => {
  return (
    <div className={styles.pressure}>
      <PressureHeaderIcon />
      <span>мм.рт. ст.</span>
    </div>
  );
};
