import { PaginationButton } from 'widgets/Timeline/common/ui/pagination-btn/pagination-btn';

import * as styles from './timeline-pagination.module.scss';

type TTimelinePagination = {
  changePage?: (newPage: number) => void;
  page: number;
  totalPages?: number;
};

export const TimelinePagination = (props: TTimelinePagination) => {
  const { page, changePage, totalPages } = props;

  const handlePrev = () => {
    if (changePage && page > 0) {
      changePage(page - 1);
    }
  };

  const handleNext = () => {
    if (changePage && totalPages && page < totalPages - 1) {
      changePage(page + 1);
    }
  };

  const formattedPage = String(page + 1).padStart(2, '0');
  const formattedTotal = totalPages ? ` / ${String(totalPages).padStart(2, '0')}` : '';

  return (
    <div className={styles['timeline-pagination']}>
      <p>{formattedPage + formattedTotal}</p>
      <div>
        <PaginationButton onClick={handlePrev} direction="left" className={styles['arrow']} />
        <PaginationButton onClick={handleNext} direction="right" className={styles['arrow']} />
      </div>
    </div>
  );
};
