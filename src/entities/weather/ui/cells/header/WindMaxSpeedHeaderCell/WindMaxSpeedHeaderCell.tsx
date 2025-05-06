import styles from "./index.module.scss";

export const WindMaxSpeedHeaderCell = () => {
  return (
    <div className={styles.wind}>
      <span>пор.</span>
      <span>м/с</span>
    </div>
  );
};
