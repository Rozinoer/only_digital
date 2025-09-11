

import { useCircleState } from 'widgets/Timeline/hooks/useCircleState';
import { TCircleProps } from 'widgets/Timeline/types/types';

import { getDotPosition, getPositions } from '../../../../common/utils/circle-utils';
import { CircleButton } from './circle-btn/circle-btn';
import * as styles from './circle.module.scss';

export const Circle = ({ themes }: TCircleProps) => {
  const { activeIndex, isComplete, circleRotation, positions, onRotate, circleRef } =
    useCircleState({ dots: themes.length });

  return (
    <div className={styles['circle-container']}>
      <div ref={circleRef} className={styles['circle']}>
        {positions.map((deg, i) => (
          <CircleButton
            key={i}
            isActive={activeIndex === i}
            isComplete={isComplete && activeIndex === i}
            index={i}
            onClick={() => onRotate(i)}
            position={{ ...getDotPosition(deg), deg: circleRotation }}
            theme={themes[i]}
          />
        ))}
      </div>
    </div>
  );
};
