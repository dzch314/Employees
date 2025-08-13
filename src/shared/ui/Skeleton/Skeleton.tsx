import { memo, useMemo, type CSSProperties } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
}

export const Skeleton = memo(({
  className, height, width, borderRadius,
}: SkeletonProps) => {
  const style: CSSProperties = useMemo(() => ({
    width, height, borderRadius,
  }), [borderRadius, height, width]);

  return (
    <div data-testid="skeleton" className={classNames(cls.Skeleton, {}, [className])} style={style} />
  );
});
