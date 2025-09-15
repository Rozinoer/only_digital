import { gsap } from 'gsap';
import { useRef, useState } from 'react';
import { getPositions } from 'widgets/Timeline/common/utils/circle-utils';

type TUseCircle = {
  dots: number;
  setChangeComplete: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const useCircle = ({
  setChangeComplete,
  setPage: changePage,
}: Pick<TUseCircle, 'setChangeComplete' | 'setPage'>) => {
  const [circleRotation, setCircleRotation] = useState(0);

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
  const { dots, setPage, setChangeComplete } = props;
  const circleRef = useRef<HTMLDivElement>(null);

  const { onComplete, onStart, onUpdate, circleRotation } = useCircle({
    setPage,
    setChangeComplete,
  });

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

  return {
    circleRef,
    positions,
    circleRotation,
    onRotate: handleRotate,
  };
};
