import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import * as styles from './circle-btn.module.scss';

export const CircleButton = ({
  index,
  isActive,
  onClick,
  onMouseMove,
  onMouseLeave,
  position: { x, y, deg = 0 },
  theme,
}: HTMLAttributes<HTMLButtonElement> & {
  index: number;
  isActive: boolean;
  position: { x: number; y: number; deg?: number };
  theme: string;
}) => {
  return (
    <>
      <button
        onClick={onClick}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={clsx(styles['circle-btn'], isActive ? styles['active'] : '')}
        style={{
          left: `calc(50% + ${x}px )`,
          top: `calc(50% + ${y}px )`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* display: inline-block; height: 50px; line-height: 50px */}
        <div style={{ transform: `rotate(${deg}deg)` }}>
          <span>{index + 1}</span>
          {isActive && <span className={styles['theme']}>{theme}</span>}
        </div>
      </button>
    </>
  );
};
