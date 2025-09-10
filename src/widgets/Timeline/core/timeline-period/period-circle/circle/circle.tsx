import { gsap } from "gsap";
import React, { useRef, useState } from "react";
import { CircleButton } from "./circle-btn/circle-btn";

import { useTimelineContext } from "widgets/Timeline/context/TimelineContextProvider";
import * as styles from "./circle.module.scss";

function getDotPosition(deg: number, radius = 250) {
  const rad = (deg * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = -Math.sin(rad) * radius;

  return { x, y };
}

type TCircleProps = Pick<
  ReturnType<typeof useTimelineContext>,
  "themes" | "changePage"
>;

export const Circle = ({ themes, changePage }: TCircleProps) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [circleRotation, setCircleRotation] = useState(0);

  const degrees = 360 / themes.length;
  const positions = Array.from(
    { length: themes.length },
    (_, i) => i * degrees + 60
  );

  const circleRef = useRef(null);

  const handleClick = (targetIndex: number) => {
    const targetAngle = positions[targetIndex];
    const rotation = targetAngle - 60;

    console.log({ rotation });

    gsap.to(circleRef.current, {
      rotation: rotation,
      duration: 2,
      ease: "power2",
      direction: 1,
      onComplete: () => {
        setActiveIndex(targetIndex);
      },
      onStart: () => {
        changePage(targetIndex);
        setActiveIndex(null);
      },
      onUpdate: function () {
        const progress = this.progress();
        setCircleRotation(rotation * progress * -1);
      },
    });
  };

  return (
    <div className={styles["circle-container"]}>
      <div ref={circleRef} className={styles["circle"]}>
        {positions.map((deg, i) => {
          const { x, y } = getDotPosition(deg);

          return (
            <CircleButton
              key={i + circleRotation}
              isActive={activeIndex === i}
              index={i}
              onClick={() => handleClick(i)}
              onMouseMove={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              position={{ x, y, deg: circleRotation }}
              theme={themes[i]}
            />
          );
        })}
      </div>
    </div>
  );
};
