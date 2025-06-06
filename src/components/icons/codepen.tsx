'use client';
import type { IconPropsNative } from './';

const Codepen = ({ size = 24, color, style, ...props }: IconPropsNative) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      shapeRendering="geometricPrecision"
      viewBox="0 0 24 24"
      {...props}
      height={size}
      width={size}
      style={{ ...style, color: color }}
    >
      <path d="m12 2 10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" />
      <path d="m22 8.5-10 7-10-7" />
      <path d="m2 15.5 10-7 10 7M12 2v6.5" />
    </svg>
  );
};
export default Codepen;
