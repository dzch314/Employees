import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      Something went wrong
      <Button onClick={reloadPage}>
        Reload page
      </Button>
    </div>
  );
});
