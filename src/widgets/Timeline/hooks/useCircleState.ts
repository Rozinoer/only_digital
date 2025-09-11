import { useState } from 'react';
import { useTimelineContext } from 'widgets/Timeline/context/TimelineContextProvider';
import { TCircleProps } from 'widgets/Timeline/types/types';

export const useCircleState = () => {
  const { isChangeComplete, setChangeComplete, page, changePage } = useTimelineContext();

  const [circleRotation, setCircleRotation] = useState(0);

  return {
    activeIndex: page,
    circleRotation,
    isComplete: isChangeComplete,
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
