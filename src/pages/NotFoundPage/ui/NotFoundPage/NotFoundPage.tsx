import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => (
  <div className={classNames(cls.NotFoundPage, {}, [className])}>
    Page not found
  </div>
));
