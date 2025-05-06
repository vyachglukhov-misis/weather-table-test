import { WindHeaderIcon } from "../../../../assets/icons/headerIcons";
import styles from "./index.module.scss";

export const WindSpeedHeaderCell = () => {
  return (
    <div className={styles.wind}>
      <WindHeaderIcon />
      <span>м/с</span>
    </div>
  );
};
