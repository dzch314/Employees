import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './VerticalDivider.module.scss';

interface VerticalDividerProps {
  className?: string;
}

export const VerticalDivider = memo(({ className }: VerticalDividerProps) => (
  <div className={classNames(cls.VerticalDivider, {}, [className])} />
));
