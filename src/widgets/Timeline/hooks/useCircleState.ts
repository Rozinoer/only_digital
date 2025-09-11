import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { emitter } from 'shared/event-emitter/event-emitter';
import { getPositions } from 'widgets/Timeline/common/utils/circle-utils';
import { useTimelineContext } from 'widgets/Timeline/context/TimelineContextProvider';

type TUseCircle = {
  dots?: number;
};

const useCircle = () => {
  const [circleRotation, setCircleRotation] = useState(0);
  const { setChangeComplete, changePage } = useTimelineContext();

  return {
    circleRotation,
    onComplete: () => {
      setChangeComplete(true);
    },

    onStart: (targetIndex: number) => {
      changePage(targetIndex);
      setChangeComplete(false);
      changePage(targetIndex);
    },
    onUpdate: (rotation: number) => {
      setCircleRotation(rotation * -1);
    },
  };
};

export const useCircleState = (props: TUseCircle) => {
  const { dots } = props;
  const circleRef = useRef(null);
  const { onComplete, onStart, onUpdate, circleRotation } = useCircle();

  const { isChangeComplete, page, contextId } = useTimelineContext();

  const positions = getPositions(dots);

  const handleRotate = (targetIndex: number) => {
    const targetAngle = positions[targetIndex];
    const rotation = targetAngle - 60;

    gsap.to(circleRef.current, {
      rotation: rotation,
      duration: 2,
      ease: 'power2',
      direction: 1,
      onComplete: () => onComplete(),
      onStart: () => onStart(targetIndex),
      onUpdate: () => onUpdate(rotation),
    });
  };

  useEffect(() => {
    emitter.on(`rotate_${contextId}`, handleRotate);
    return () => emitter.off(`rotate_${contextId}`, handleRotate);
  }, []);

  return {
    circleRef,
    positions,
    activeIndex: page,
    isComplete: isChangeComplete,
    circleRotation,
    onRotate: handleRotate,
  };
};
