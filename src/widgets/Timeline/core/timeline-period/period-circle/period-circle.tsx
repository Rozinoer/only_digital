import * as styles from "./period-range.module.scss";

import { Circle } from "./circle/circle";
import { Period } from "./period/period";
import { useTimelineContext } from "widgets/Timeline/context/TimelineContextProvider";

export const PeriodCircle = () => {
  const { themes, changePage, data } = useTimelineContext();

  return (
    <div className={styles["timeline_date"]}>
      <Circle themes={themes} changePage={changePage} />
      <Period period={data.period} />
    </div>
  );
};
