import { type SVGProps } from 'react';

import { cn } from '../../../libraries/tailwind/cn';

type IconProps = SVGProps<SVGSVGElement>;
export const XIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      width="64"
      height="64"
      className={cn(
        // size && size,
        'size-6 group flex-none fill-neutral-200 transition group-hover:fill-neutral-300',
      )}
      role="img"
      aria-labelledby="xIconTitle"
      {...props}
    >
      <title id="xIconTitle">X Icon</title>
      <rect
        className="fill-neutral-200 group-hover:fill-neutral-300"
        width="64"
        height="64"
        rx="10"
        ry="10"
        fill="#eee"
      />
      <path
        d="M 41.116 18.375 h 4.962 l -10.8405 12.39 l 12.753 16.86 H 38.005 l -7.821 -10.2255 L 21.235 47.625 H 16.27 l 11.595 -13.2525 L 15.631 18.375 H 25.87 l 7.0695 9.3465 z m -1.7415 26.28 h 2.7495 L 24.376 21.189 H 21.4255 z"
        fill="black"
      />
    </svg>
  );
};
