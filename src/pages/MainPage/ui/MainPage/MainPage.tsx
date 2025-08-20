import { useCallback, useState } from 'react';

import { EmployeeCreator } from '@/widgets/EmployeeCreator';
import { EmployeesList } from '@/widgets/EmployeesList';
import { FilterEmployees } from '@/features/FilterEmployees';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './MainPage.module.scss';

export interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  const [reloadList, setReloadList] = useState(Date.now());
  const onSuccess = () => {
    setReloadList(Date.now());
  };
  return (
    <div className={classNames('', {}, [className])}>
      <div className={cls.actions}>
        <EmployeeCreator onSuccess={onSuccess} />
        <FilterEmployees />
      </div>
      <div className={cls.content}>
        <EmployeesList trigger={reloadList} />
      </div>
    </div>
  );
};

export default MainPage;
