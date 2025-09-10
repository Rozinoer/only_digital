import { PropsWithChildren } from 'react';
import { TimelineData } from 'shared/data/type';
import { TimelineContextProvider } from 'widgets/Timeline/context/TimelineContextProvider';

import * as styles from './timeline.module.scss';

type TTimeline = PropsWithChildren<{
  data: TimelineData;
}>;

export const Timeline = ({ children, data }: TTimeline) => {
  return (
    <section className={styles['timeline']}>
      <TimelineContextProvider data={data}>{children}</TimelineContextProvider>
    </section>
  );
};
