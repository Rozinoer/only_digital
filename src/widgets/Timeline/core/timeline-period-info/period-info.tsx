import { useTimelineContext } from "widgets/Timeline/context/TimelineContextProvider";
import { TimelinePagination } from "./pagination/timeline-pagination";
import { TimelineSwiper } from "./swiper/timeline-swiper";
import * as styles from "./period-info.module.scss";

export const TimelinePeriodInfo = () => {
  const {
    page,
    totalPages,
    changePage,
    data: { events },
  } = useTimelineContext();
  return (
    <div className={styles["period_info"]}>
      <TimelinePagination
        changePage={changePage}
        page={page}
        totalPages={totalPages}
      />
      <TimelineSwiper slides={events} />
    </div>
  );
};
