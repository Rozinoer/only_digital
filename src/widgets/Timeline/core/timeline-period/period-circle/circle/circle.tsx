import { gsap } from 'gsap';
import { useRef } from 'react';
import { useCircleState } from 'widgets/Timeline/hooks/useCircleState';
import { TCircleProps } from 'widgets/Timeline/types/types';

import { getDotPosition, getPositions } from '../../../../common/utils/circle-utils';
import { CircleButton } from './circle-btn/circle-btn';
import * as styles from './circle.module.scss';

export const Circle = ({ themes }: TCircleProps) => {
  const { onComplete, onStart, onUpdate, activeIndex, isComplete, circleRotation } =
    useCircleState();

  const positions = getPositions(themes.length);

  const circleRef = useRef(null);

  const handleClick = (targetIndex: number) => {
    const targetAngle = positions[targetIndex];
    const rotation = targetAngle - 60;

    gsap.to(circleRef.current, {
      rotation: rotation,
      duration: 2,
      ease: 'power2',
      direction: 1,
      onComplete,
      onStart: () => onStart(targetIndex),
      onUpdate: () => onUpdate(rotation),
    });
  };

  return (
    <div className={styles['circle-container']}>
      <div ref={circleRef} className={styles['circle']}>
        {positions.map((deg, i) => (
          <CircleButton
            key={i}
            isActive={activeIndex === i}
            isComplete={isComplete && activeIndex === i}
            index={i}
            onClick={() => handleClick(i)}
            position={{ ...getDotPosition(deg), deg: circleRotation }}
            theme={themes[i]}
          />
        ))}
      </div>
    </div>
  );
};
