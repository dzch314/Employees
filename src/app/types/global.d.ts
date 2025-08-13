declare module '*.scss' {
  const classNames: {
    [className: string]: string;
  };
  export default classNames;
}

declare module '*.svg' {
  import { VFC, SVGProps } from 'react';

  const SVG: VFC<SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;
declare const __API__: string;
