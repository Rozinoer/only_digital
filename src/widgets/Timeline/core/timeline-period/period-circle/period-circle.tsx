import { useTimelineContext } from 'widgets/Timeline/context/TimelineContextProvider';

import { Circle } from './circle/circle';
import * as styles from './period-range.module.scss';
import { Period } from './period/period';

export const PeriodCircle = () => {
  const { data, theme } = useTimelineContext();

  return (
    <>
      <div className={styles['timeline_date']}>
        <Circle />
        <Period period={data.period} />
      </div>
      <span className={styles['theme']}>{theme}</span>
    </>
  );
};
