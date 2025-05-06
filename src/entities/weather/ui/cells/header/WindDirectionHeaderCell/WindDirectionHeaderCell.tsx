import { WindDirectionHeaderIcon } from "../../../../assets/icons/headerIcons";
import styles from "./index.module.scss";

export const WindDirectionHeaderCell = () => {
  return (
    <div className={styles.wind}>
      <WindDirectionHeaderIcon />
      <span>напр.</span>
    </div>
  );
};
