import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div data-testid="loader" className={classNames(cls.Loader, {}, [className])} />
);
