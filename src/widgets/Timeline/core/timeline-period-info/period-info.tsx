import { AnimatedContainer } from 'shared/animated-container/animated-container';
import { useTimelineContext } from 'widgets/Timeline/context/TimelineContextProvider';

import { TimelinePagination } from './pagination/timeline-pagination';
import * as styles from './period-info.module.scss';
import { TimelineSwiper } from './swiper/timeline-swiper';

export const TimelinePeriodInfo = () => {
  const {
    page,
    totalPages,
    changePage,
    data: { events },
    isChangeComplete,
  } = useTimelineContext();
  return (
    <div className={styles['period_info']}>
      <TimelinePagination changePage={changePage} page={page} totalPages={totalPages} />
      <TimelineSwiper slides={events} key={page} isVisible={isChangeComplete} />
    </div>
  );
};
