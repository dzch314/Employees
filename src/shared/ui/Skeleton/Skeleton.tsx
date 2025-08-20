import { type CSSProperties } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
}

export const Skeleton = ({
  className, height, width, borderRadius,
}: SkeletonProps) => {
  const style: CSSProperties = { width, height, borderRadius };

  return (
    <div data-testid="skeleton" className={classNames(cls.Skeleton, {}, [className])} style={style} />
  );
};
