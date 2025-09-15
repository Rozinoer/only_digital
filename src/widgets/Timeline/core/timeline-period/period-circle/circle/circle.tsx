import { useTimelineContext } from 'widgets/Timeline/context/TimelineContextProvider';
import { useCircleState } from 'widgets/Timeline/hooks/useCircleState';

import { getDotPosition, getPositions } from '../../../../common/utils/circle-utils';
import { CircleButton } from './circle-btn/circle-btn';
import * as styles from './circle.module.scss';

export const Circle = () => {
  const { circleRef, positions, page, isChangeComplete, changePage, circleRotation, themes } =
    useTimelineContext();

  return (
    <div className={styles['circle-container']}>
      <div ref={circleRef} className={styles['circle']}>
        {positions.map((deg, i) => (
          <CircleButton
            key={i}
            isActive={page === i}
            isComplete={isChangeComplete && page === i}
            index={i}
            onClick={() => changePage(i)}
            position={{ ...getDotPosition(deg), deg: circleRotation }}
            theme={themes[i]}
          />
        ))}
      </div>
    </div>
  );
};
