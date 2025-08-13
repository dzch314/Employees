import { memo, type ReactNode } from 'react';

import { Text } from '@/shared/ui/Text/Text';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './EmployeeInfo.module.scss';

interface EmployeeInfoProps {
  name: string
  className?: string;
  actionsSlot?: ReactNode
}

export const EmployeeInfo = memo(({ className, name, actionsSlot }: EmployeeInfoProps) => (
  <div className={classNames(cls.EmployeeInfo, {}, [className])}>
    <Text text={name} className={cls.name} />
    {actionsSlot}
  </div>
));
