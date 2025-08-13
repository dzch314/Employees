import { memo, type ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import type { Employee } from '../../model/types/employee';
import { EmployeeImage } from '../EmployeeImage';
import { EmployeeInfo } from '../EmployeeInfo';
import cls from './EmployeeItem.module.scss';

interface EmployeeItemProps {
  employee: Employee;
  className?: string;
  actionsSlot?: ReactNode;
}

export const EmployeeItem = memo(({ className, employee, actionsSlot }: EmployeeItemProps) => {
  const { img, name } = employee;

  return (
    <div className={classNames(cls.EmployeeItem, {}, [className])}>
      <EmployeeImage name={name} img={img} />
      <EmployeeInfo name={name} actionsSlot={actionsSlot} />
    </div>
  );
});
