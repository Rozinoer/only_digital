import clsx from 'clsx';
import { emitter } from 'shared/event-emitter/event-emitter';
import { PaginationButton } from 'widgets/Timeline/common/ui/pagination-btn/pagination-btn';

import * as styles from './timeline-pagination.module.scss';

type TTimelinePagination = {
  changePage?: (newPage: number) => void;
  page: number;
  totalPages?: number;
  contextId: string;
};

export const TimelinePagination = (props: TTimelinePagination) => {
  const { page, changePage, totalPages, contextId } = props;

  const handlePrev = () => {
    if (changePage && page > 0) {
      changePage(page - 1);
      emitter.emit(`rotate_${contextId}`, page - 1);
    }
  };

  const handleNext = () => {
    if (changePage && totalPages && page < totalPages - 1) {
      changePage(page + 1);
      emitter.emit(`rotate_${contextId}`, page + 1);
    }
  };

  const formattedPage = String(page + 1).padStart(2, '0');
  const formattedTotal = totalPages ? ` / ${String(totalPages).padStart(2, '0')}` : '';

  return (
    <div className={styles['timeline-pagination']}>
      <p>{formattedPage + formattedTotal}</p>
      <div>
        <PaginationButton
          onClick={handlePrev}
          direction="left"
          className={clsx(styles['arrow'], !page ? styles['semi-opacity'] : '')}
        />
        <PaginationButton
          onClick={handleNext}
          direction="right"
          className={clsx(styles['arrow'], page === totalPages - 1 ? styles['semi-opacity'] : '')}
        />
      </div>
    </div>
  );
};
