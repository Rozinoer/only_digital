// ArrowIcon.jsx - компонент для SVG стрелки
import React from 'react';

interface ArrowIconProps {
  direction?: 'left' | 'right';

  size?: number;
  className?: string;
}

const ArrowIcon = ({ direction = 'right', size = 24, className }: ArrowIconProps) => {
  const paths = {
    left: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z',
    right: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      <path d={paths[direction]} />
    </svg>
  );
};

export default ArrowIcon;
