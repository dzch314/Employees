import { memo } from 'react';

import StatusIcon from '@/shared/assets/icons/status.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import type { Status } from '../../model/types/status';
import cls from './StatusOption.module.scss';

interface StatusOptionProps {
  className?: string;
  value: Status;
  text: string;
}

export const StatusOption = memo(({ className, text, value }: StatusOptionProps) => (
  <div className={classNames(cls.StatusOption, {}, [className])}>
    <StatusIcon className={classNames('', {}, [cls[value]])} />
    <span>{text}</span>
  </div>
));
