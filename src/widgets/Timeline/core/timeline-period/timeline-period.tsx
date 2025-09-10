import { PeriodCircle } from "./period-circle/period-circle";
import * as styles from "./period-picker.module.scss";
import { PeriodTitle } from "./title/period-title";

export const TimelinePeriod = () => {
  return (
    <div className={styles["timeline_period-picker"]}>
      <PeriodTitle />
      <PeriodCircle />
    </div>
  );
};
