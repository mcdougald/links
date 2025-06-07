import type { IconPropsNative } from './index';

/**
 * const FooterWave = () => {
 *   const router = useRouter()
 *
 *   return (
 *     <div
 *       className={classNames('w-full flex flex-col bg-pt-purple-600 isolate pointer-events-none', {
 *         'bg-pt-purple-700': router.pathname !== '/'
 *       })}
 *     >
 *       <Image
 *         src='/footerWave.svg'
 *         alt='Footer Wave'
 *         width={1440}
 *         height={260}
 *         priority={true}
 *         className='w-full drop-shadow-[0_-10px_10px_#8050E3] md:drop-shadow-[0_-20px_20px_#8050E3]'
 *       />
 *       <span className='w-full h-24 -mt-[1px] bg-pt-purple-700 z-10' />
 *     </div>
 *   )
 * }
 * @param {string | undefined} color
 * @param {React.CSSProperties | undefined} style
 * @param {Omit<IconPropsNative, "color" | "style">} props
 */
export const FooterWave = ({ color, style, ...props }: IconPropsNative) => {
  return (
    <svg
      id="e23EL9wW6Sn2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 260"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      width={1440}
      height={260}
      style={{ ...style }}
      {...props}
    >
      <g transform="translate(0-8)">
        <path
          d="M1440,225.714l-24-14.095c-24-14.095-72-42.286-120-35.238s-96,49.333-144,42.286c-48-7.048-96-63.429-144-84.572s-96-7.047-144,14.096c-48,21.142-96,49.333-144,49.333s-96-28.191-144-35.238c-48-7.048-96,7.047-144,24.666s-96,38.762-144,28.191c-48-10.572-96-52.857-144-74C96,120,48,120,24,120h-24l.000013,148L24,268c24,0,72,0,120,0s96,0,144,0s96,0,144,0s96,0,144,0s96,0,144,0s96,0,144,0s96,0,144,0s96,0,144,0s96,0,144,0s96,0,120,0h24v-42.286Z"
          clipRule="evenodd"
          fill={color ?? '"#4c249f"'}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

/**
 *
 * Taken from https://github.com/GenerationSoftware/pooltogether-client-monorepo/blob/ef9b199b42b7e22a4cea9121f635e75101d3cc6f/apps/landing-page/src/components/Home/HomeHeader.tsx
 * EX:
 * const HeaderWave = () => {
 *   return (
 *     <div className='w-full flex flex-col -mt-20 bg-pt-purple-600 isolate pointer-events-none'>
 *       <span className='w-full h-32 -mb-[1px] bg-pt-purple-700 z-10' />
 *       <Image
 *         src='/headerWave.svg'
 *         alt='Header Wave'
 *         width={1440}
 *         height={190}
 *         priority={true}
 *         className='w-full drop-shadow-[0_10px_10px_#8050E3] md:drop-shadow-[0_20px_20px_#8050E3]'
 *       />
 *     </div>
 *   )
 * }
 *
 * @param {string | undefined} color
 * @param {React.CSSProperties | undefined} style
 * @param {Omit<IconPropsNative, "color" | "style">} props
 */
export const HeaderWave = ({ color, style, ...props }: IconPropsNative) => {
  return (
    <svg
      id="eT9USjVq6Gr1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 190"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      width={1440}
      height={190}
      style={{ ...style }}
      {...props}
    >
      <g>
        <path
          d="M1480,57.4287l-24,12.4761c-24,12.4762-72,37.4282-120,31.1902-48-6.2378-96-43.6664-144-37.4283s-96,56.1433-144,74.8573-96,6.238-144-12.476c-48-18.715-96-43.667-144-43.667s-96,24.952-144,31.19-96-6.238-144-21.8329c-48-15.5953-96-34.3095-144-24.9524s-96,46.7853-144,65.5003C136,151,88,151,64,151h-24v-131h24c24,0,72,0,120,0s96,0,144,0s96,0,144,0s96,0,144,0s96,.0001,144,.0001s96,0,144,0s96,0,144,0s96,0,144,0s96,0,144,0s96,0,120,0h24v37.4286Z"
          transform="translate(-40-20)"
          clipRule="evenodd"
          fill={color ?? '"#4c249f"'}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};
