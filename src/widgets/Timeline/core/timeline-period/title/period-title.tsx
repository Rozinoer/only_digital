import * as styles from "./title.module.scss";

export const PeriodTitle = () => {
  return (
    <div className={styles["title_wrapper"]}>
      <h1 className={styles["title"]}>
        Исторические
        <br /> даты
      </h1>
    </div>
  );
};
