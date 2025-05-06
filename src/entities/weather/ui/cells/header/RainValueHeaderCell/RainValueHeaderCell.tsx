import { RaindropsHeaderIcon } from "../../../../assets/icons/headerIcons";
import styles from "./index.module.scss";

export const RainValueHeaderCell = () => {
  return (
    <div className={styles.rain}>
      <RaindropsHeaderIcon />
      <span>мм</span>
    </div>
  );
};
